// demo 测试接口
module.exports = async (ctx, next) => {
  const { a } = ctx.query;
  console.log(`get参数：a=${a}`);

  ctx.state={
    errCode: 200,
    errMsg: 'ok',
    data:{
      list:[
        { name: '001', value: '列表001' },
        { name: '002', value: '列表002' },
        { name: '003', value: '列表003' },
        { name: '004', value: '列表004' },
      ]
    }
  }


  data = {
    list: [

    ],
  };
};
