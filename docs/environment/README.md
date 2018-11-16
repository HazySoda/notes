# 开发环境配置

## Homebrew

`Homebrew` 是一款 Mac 平台下的软件包管理工具（类似 `apt-get` 或 `yum`），可以让我们在不关心各种依赖和文件路径的情况下实现包管理功能，十分方便快捷。

### 安装

在安装之前，我们需要先安装 `Xcode` ，它是 `Homebrew` 的一个依赖，如果我们在工作中不使用 `Xcode` ，那么只需要安装 `Xcode CLI` 即可：

```bash
$ xcode-select --install
```

安装完 `Xcode CLI` 之后，我们开始安装 `Homebrew` ：

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 基本使用

在下面的代码中我们使用 `wget` 来举例子：

```bash
# 更新软件源
$ brew update

# 查看安装过的包
$ brew list

# 安装
$ brew install wget

# 升级
$ brew upgrade wget

# 卸载
$ brew uninstall wget
```
