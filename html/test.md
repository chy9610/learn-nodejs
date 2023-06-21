---

---

# **插件开发**

git clone https://oauth2:token@devapp.cmit.cloud:20000/b336f6950c528a6172ae611d25bf1db5/ali-plugin.git

### 1、**项目启动**

本地

```
npm run dev:mp-ali-plugin
npm run dev:mp-wx-plugin
npm run dev:mp-app-plugin
```

打包

```
npm run build:mp-ali-plugin
npm run build:mp-wx-plugin
npm run build:mp-app-plugin
```

### 2、**工程结构**

```
├── api  请求接口配置
├── components  业务组件
    ├── marketingModule  二次确认办理弹窗插件
        ├── shop  店铺模块
        ├── shopDetail  商详页模块
    ├── wechetComponents  弹窗调用组件
├── config  项目配置文件
    ├── routerAuth  路由拦截器,
├── js_sdk  通用库及插件
├── mixns  混入模式
├── static  资源文件
├── store  状态管理
├── styles  全局样式
├── utils  框架基础类库/基础工具
├── flowHomePage  流量主页
├── index  套餐专题页
├── detail  套餐详情页
├── interest  权益主页
├── App.vue 入口载入文件
├── main.js 模块入口加载文件
├── manifest.json   构建配置文件
├── pages.json  路由管理器
├── uni.scss    组件基础文件
```

### **3、开发**

![img](http://activity.cmcc-cs.cn/chop/res/prd-ngmc1/product/product/265d9fb1a67c420c8b96ac42fcfa1691.png)
![img](http://activity.cmcc-cs.cn/chop/res/prd-ngmc1/product/product/c3c90c09247c4a508179a3cba86043be.png)    
![img](http://activity.cmcc-cs.cn/chop/res/prd-ngmc1/product/product/7853aa14bd4944499a393c0d086e0c97.png) 

#### **3.1、环境**

默认第一套测试环境

环境修改：

接口请求处新增grayscale传参

```
'grayscale=graydev' // 开发环境
'grayscale=graythird' // 第二套测试环境
'grayscale=grayshop' // 灰度环境
```

生产环境：修改\.env.local文件地址为生产地址

#### **3.2、登录**

默认未登录，可测除预校验、电子协议等涉及用户隐私之外的功能

支付宝和微信使用单点登录需调用方传sourceCode、mobile、sign、timestamp四个字段

app小程序插件需调用方传appMiniToken字段

#### **3.3、打码**
