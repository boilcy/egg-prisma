# 简单说明
主要代码就lib/index.js
# 我不想clone此仓库
安装关键依赖:

```
npm i @prisma/client apollo-server-koa graphql graphql-fields reflect-metadata class-validator type-graphql typegraphql-prisma 
```

然后复制lib/index.js
并在app.js中使用即可

```
//app.js
'use strict';

module.exports = app => {
  require('./lib')(app);
};
```