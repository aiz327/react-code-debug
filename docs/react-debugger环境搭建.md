## React code debug

### 调试步骤
- 拉取React源码
- create-react-app 创建调试程序
- v15 version 特别之处
  
### visual studio code debugger

#### 重要的
vs code提供了不同环境的debug配置,通过创建launch.json,可以选择不同的调试环境如: chrome、node等。

- 常用的json配置参数
   
   1. request: `'attach'` `'launch'`

        

   2. type debug type
   3. preLaunchTask & postDebugTask 
   4. program args 

#### 调试模式
1. launch 模式
2. attach 模式

#### vscode task

在prelaunchTask参数中可以指定一个task名字，在启动调试前调用

1. label type
2. problemMatcher isBackground
3. 示例
    ```
    {
        "version": "2.0.0",
        "tasks": [
            {
                "type": "npm",
                "script": "debug:15",
                "label": "npm: debug:15",
                "detail": "npm run debug:15",
                "problemMatcher": [
                    {
                        "base": "$tsc-watch",
                        "background": {
                            "activeOnStart": true,
                            "beginsPattern": "Starting the development server...",
                            "endsPattern": "Compiled successfully"
                        }
                    }
                ],
                "isBackground": true
            }
        ]
    }
    ```



### 参考资料

- [VsCode Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [VsCode Task](https://code.visualstudio.com/docs/editor/tasks)
- [vue的debug调试设置概要](https://github.com/Microsoft/vscode-recipes/blob/master/vuejs-cli/README.md)
- [attach模式的配置](https://github.com/forsigner/vscode-debug-examples/blob/master/JavaScript/react-app-attach/README_zh-CN.md)
- [vscode-chrome-debug官方文档attach介绍](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#attach)
- [markdown guide](https://www.markdownguide.org/cheat-sheet/#basic-syntax)
- [markdown基本要素](https://shd101wyy.github.io/markdown-preview-enhanced)
- [react源码调试环境搭建](https://zhuanlan.zhihu.com/p/336933386)
- [配置 React 源码的本地调试环境](https://ksh7.com/2020/05/13/react-source/)
- [React源码解读-本地开发环境搭建](https://juejin.cn/post/6844903972634001421)
- [react源码学习环境搭建](https://segmentfault.com/a/1190000020239791)
- [搭建源码调试环境](https://github.com/neroneroffy/react-source-code-debug/blob/master/docs/setUpDebugEnv.md)
