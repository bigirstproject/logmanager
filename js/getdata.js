function next() {
    $.get("/query", function (data) {
        alert(data)
        return data;
    });
}


function AddTableRow(str) {
    var table = document.getElementById("table");
    var tr = table.insertRow();
    var i = 0;
    for(var item in str) {
        if(item === 'id') {
            continue;
        }
        var td = tr.insertCell(i);
        if(item === 'state' && type === 'rnmanager') {
            if(str[item] === 0) {
                td.innerHTML = "<span class='label label-warning'>审核</span>";
            }
            if(str[item] === 1) {
                td.innerHTML = "<span class='label label-info'>测试</span>";
            }
            if(str[item] === 2) {
                td.innerHTML = "<span class='label label-primary'>灰度</span>";
            }
            if(str[item] === 3) {
                td.innerHTML = "<span class='label label-success'>上架</span>";
            }
            if(str[item] === 4) {
                td.innerHTML = "<span class='label label-danger'>下架</span>";
            }
        } else if(item === 'odd') {
            if(str[item] === 0) {
                td.innerHTML = "<span class='label label-danger'>不配置</span>";
            }
            if(str[item] === 1) {
                td.innerHTML = "<span class='label label-success'>配置</span>";
            }
        } else if(item === 'even') {
            if(str[item] === 0) {
                td.innerHTML = "<span class='label label-danger'>不配置</span>";
            }
            if(str[item] === 1) {
                td.innerHTML = "<span class='label label-success'>配置</span>";
            }
        } else if(item === 'state' && type === 'rulemanager') {
            if(str[item] === 0) {
                td.innerHTML = "<span class='label label-danger'>未上线</span>";
            }
            if(str[item] === 1) {
                td.innerHTML = "<span class='label label-success'>上线</span>";
            }
        } else if(item === 'state' && type === 'errormanager') {
            if(str[item] === 0) {
                td.innerHTML = "<span class='label label-danger'>未处理</span>";
            }
            if(str[item] === 1) {
                td.innerHTML = "<span class='label label-success'>已处理</span>";
            }
        } else if(item === 'url' && type ==='appmanager') {
            td.innerHTML = "<div  id='qrcode" + table.rows.length + "' style='width:100px; height:100px; margin-top:15px;'/>";
            toQRCode('qrcode'+table.rows.length,str[item])
        } else {
            td.innerHTML = str[item];
        }
        i++;
    }
    if(type === 'appmanager') {
        if(control === 'appmanager') {
            var td = tr.insertCell(i);
            td.innerHTML = "<button  id='download" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>下载</button>";
            document.getElementById('download' + table.rows.length).onclick = function() {
                download(str);
            }
        } else {
            var td = tr.insertCell(i);
            td.innerHTML = "<button  id='delBtn" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>删除</button>";
            document.getElementById('delBtn' + table.rows.length).onclick = function() {
                deleteRow(str);
            }
        }
    } else if(type === "rnwlist") {
        var td = tr.insertCell(i);

        td.innerHTML = "<button  id='delBtn" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>删除</button>";
        document.getElementById('delBtn' + table.rows.length).onclick = function() {
            deleteRow(str);
        }

    } else if(type === 'testmanager') {
        var td = tr.insertCell(i);
        td.innerHTML = "<button  id='testBtn" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>执行</button>";
        document.getElementById('testBtn' + table.rows.length).onclick = function() {
            run(str)
        }
    } else if(type === 'sdkmanager') {
        var td = tr.insertCell(i);
        td.innerHTML = "<button  id='downloadBtn" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>下载</button>";
        document.getElementById('downloadBtn' + table.rows.length).onclick = function() {
            downloadpath(str)
        }
    } else {
        var td = tr.insertCell(i);

        td.innerHTML = "<button  id='editBtn" + table.rows.length + "'  class='btn  btn-primary' style='margin-right:15px;'>编辑</button>";
        document.getElementById('editBtn' + table.rows.length).onclick = function() {
            editTable(str);
        }
    }
}
