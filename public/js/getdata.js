var p = 1;
var l = 10;
var n = 1;

function createTable() {
	layer.open({
		type: 2,
		title: false,
		shadeClose: true,
		area: ['600px', '80%'],
		content: addcontent
	});
}

function editTable(str) {

	layer.open({
		type: 2,
		title: false,
		shadeClose: true,
		area: ['600px', '80%'],
		content: editcontent,
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.initData(str);
		}
	});
}

function download(str) {
    console.log('str = '+str)
	// alert(str)
	window.location.href = str;
}

function downloadpath(str) {

	window.location.href = str.path;
}

function run(str) {

	alert(str.name)
}

function deleteRow(str) {
	layer.confirm('确定删除该记录?', {
		btn: ['确定', '取消']
	}, function() {
		layer.load(1);
		$.post('/managerapi/deletedata', {
			"type": type,
			"data": {
				"id": str['id'],
			}
		}, function(data, status) {
			layer.closeAll('loading');
			if(status == 'success') {
				if(data.msg == 'suc') {
					layerMessage('删除成功');
					getdata();
				} else {
					layerMessage('删除失败');
				}
			} else {
				layerMessage('删除失败');
			}
		});
	}, function() {

	});
}

function layerMessage(message) {
	layer.msg(message, {
		offset: 0,
		shift: 6
	});
}


function toQRCode(id,str) {

	var qrcode = new QRCode(document.getElementById(id), {
		width: 100,
		height: 100
	});
	qrcode.makeCode(str);
}

function AddTableRow(str) {
	var table = document.getElementById("table");
	var tr = table.insertRow();
	var i =0;
	for(var item in str) {
		console.log('item = '+item + '  str[item] = '+str[item])
		var td = tr.insertCell(i);
        if(item === 'id') {
            td.innerHTML = str[item];
        }else if(item === 'phone') {
            td.innerHTML = str[item];
		}else 	if(item === 'phonemodel') {
            td.innerHTML = str[item];
        }else 	if(item === 'version') {
            td.innerHTML = str[item];
        }else 	if(item === 'os') {
            td.innerHTML = str[item];
        }else 	if(item === 'feedbook') {
            td.innerHTML = str[item];
        }else 	if(item === 'downurl') {
            var downurl = str[item];
            td.innerHTML = "<button  id='downurl"+table.rows.length +"'  class='btn  btn-primary' style='margin-right:15px;'>下载</button>";
            console.log('downur   '+table.rows.length )
            document.getElementById('downurl'+table.rows.length ).onclick = function() {
                download(downurl);
            }
        }else 	if(item === 'date') {
            td.innerHTML = str[item];
        }
        i++;
    }


}

function DelTable() {
	var table = document.getElementById("table");
	var rowNum = table.rows.length;
	for(i = 0; i < rowNum; i++) {
		table.deleteRow(i);
		rowNum = rowNum - 1;
		i = i - 1;
	}
}

function Pre() {
    console.log(' pre ')
	if(p == 1)
		return;
	n = p - 1;
	getdata();
}

function Next() {
	n = p + 1;
    console.log(' Next ')
	getdata();
}

function getdata() {
	$.getJSON("/query", function(data) {
        if(data!== null){
            $("#table tr:gt(0)").remove();
        }
        if(data.length != 0) {
            p = n;
        }
		document.getElementById('countInfo').innerHTML = '共' +  data.length + '条记录';
		document.getElementById('pageInfo').innerHTML = '每页' + l + '条';
		document.getElementById('page').innerHTML = p;
        console.log(' data.length = '+ data.length )
		for(var i = 0; i < data.length; i++) {
			AddTableRow(data[i]);
		}
	});
}