-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-04-29 13:02:10
-- 服务器版本： 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `logmanager`
--

-- --------------------------------------------------------

--
-- 表的结构 `loginfo`
--

CREATE TABLE `loginfo` (
  `id` int(11) NOT NULL,
  `version` text CHARACTER SET utf8 NOT NULL,
  `os` text CHARACTER SET utf8 NOT NULL,
  `feedback` text CHARACTER SET utf8 NOT NULL,
  `infoaddress` text CHARACTER SET utf8 NOT NULL,
  `date` text CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='日志统计表';

--
-- 转存表中的数据 `loginfo`
--

INSERT INTO `loginfo` (`id`, `version`, `os`, `feedback`, `infoaddress`, `date`) VALUES
(1, '4.10.0', 'android', '很好', 'www.baidu.com', '2018.04.30'),
(2, '4.10.0', 'android', '很好', 'www.baidu.com', '2018.04.30'),
(12, '4.10.1', 'ios', '登录1常', 'www.taobao.com', '20180501'),
(11, '4.10.1', 'ios', '登录常', 'www.taobao.com', '20180501'),
(10, '4.10.1', 'ios', '登录常', 'www.taobao.com', '20180501'),
(6, '4.10.1', 'ios', '登录异常', 'www.taobao.com', '20180501'),
(7, '4.10.1', 'ios', '登录异常', 'www.taobao.com', '20180501'),
(8, '4.10.1', 'ios', '登录异常', 'www.taobao.com', '20180501'),
(9, '4.10.1', 'ios', '登录异常', 'www.taobao.com', '20180501'),
(13, '4.10.1', 'ios', '登录1常', 'www.taobao.com', '20180501');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `loginfo`
--
ALTER TABLE `loginfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `loginfo`
--
ALTER TABLE `loginfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
