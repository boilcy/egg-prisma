# 简单说明
主要代码就lib/index.js. 
和schema.prisma中
```
generator typegraphql {
  provider = "typegraphql-prisma"
}
```
仅凭此你就可以享受prisma和GraphQL啦!
# scripts
```
npm run dbgen //npx prisma generate
npm run dbpull //npx prisma db pull
npm run dbmigrate xx //npx prisma migrate dev --name "xx"
```
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

# 为什么不做成插件
并不需要？一串在app.js中的逻辑代码而已哇。

# 为啥要用Prisma
因为ORM就应该只定义一次！egg-sequelize不仅migrations要重复一次，使用graphql还要重复一次。我也是偶然发现Prisma与typegraphql有集成，可自动生成resovlers。

用GraphQL还是尝试为主，打算做的项目也比较小，不考虑性能。

倒是apollo-server-koa。官方示例和egg示例都没有说怎么加这个中间件，apollo-server-koa的示例我删去一些也能运行, 懵了挺久。