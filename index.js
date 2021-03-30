
window.onload = function () {

  //获取这四个多选框items
  var items = document.getElementsByName("items");
  //获取id为checkedAllBox的全选/全不选的多选框
  var checkedAllBox = document.getElementById("checkedAllBox");

  /*
    全选按钮
      -点击按钮以后，四个多选框全部选中
  */
  //1.#checkedAllBtn  全选
  //获取id为checkedAllBtn的按钮
  var checkedAllBtn = document.getElementById("checkedAllBtn");
  //为 id为checkedAllBtn的按钮绑定单击响应函数
  checkedAllBtn.onclick = function () {
    // alert("四个都选中了！");

    //先遍历 items数组
    for (var i = 0; i < items.length; i++) {

      //通过多选框的checked属性可以来获取或设置多选框的选中状态,true为选中，false为不选
      //设置四个多选框变成选中状态
      items[i].checked = true;
    }

    //将全选/全不选设置为选中状态
    checkedAllBox.checked = true;

  }


  /*
    全不选按钮
      -点击按钮以后，四个多选框全部没选中
  */
  //2.#checkedNoBtn
  //获取id为checkedNoBtn的按钮
  var checkedNoBtn = document.getElementById("checkedNoBtn");
  //为 id为checkedNoBtn的按钮绑定单击响应函数           
  checkedNoBtn.onclick = function () {
    // alert("四个都不选！");

    //先遍历 items数组
    for (var i = 0; i < items.length; i++) {
      //设置四个多选框变成没选中状态
      items[i].checked = false;
    }

    //将全选/全不选设置为没选中状态
    checkedAllBox.checked = false;
  }

  /*
    反选按钮
      -点击按钮以后，选中变为没选中的状态，没选中的变为选中
  */
  //3.#checkedRevBtn
  //获取id为checkedRevBtn的按钮
  var checkedRevBtn = document.getElementById("checkedRevBtn");
  //为 id为checkedRevBtn的按钮绑定单击响应函数            
  checkedRevBtn.onclick = function () {
    // alert("四个都不选！");

    //将checkedAllBox设置为选中状态
    checkedAllBox.checked = true;

    //先遍历 items数组
    for (var i = 0; i < items.length; i++) {
      //判断多选款的状态
      // if(items[i].checked){
      //     //证明多选框已选中，则设置为没选中的状态
      //     items[i].checked = false;
      // }else{
      //     //证明多选框没选中，则设置为选中的状态
      //     items[i].checked = true;
      // }

      //如果items[i].checked的值是true则赋值false。如果是false则赋值true
      items[i].checked = !items[i].checked;

      //判断四个多选框是否全选
      //反向思考，只要有一个多选框没选中，那么就不是全选
      if (!items[i].checked) {
        //一旦进去判断，则证明多选框不是全选状态
        //将checkedAllBox设为没选中的状态
        checkedAllBox.checked = false;
      }
    }

    //在反选时也需要判断四个多选框是否全都选中

  }

  /*
     提交按钮
        --点击按钮以后，将所有选中的多选框的 value属性值弹出
  */
  //4.#sendBtn
  //获取id为sendBtn的按钮
  var sendBtn = document.getElementById("sendBtn");
  //为 id为sendBtn的按钮绑定单击响应函数          
  sendBtn.onclick = function () {
    // alert("提交");
    //遍历items
    for (var i = 0; i < items.length; i++) {
      //判读多选框是否选中
      if (items[i].checked) {
        alert(items[i].value);
      }

    }
  }

  /*
     全选，全不选多选框
        -它选中时，其余的都选中，当他取消时，其余的都取消，也就是四个多选框的状态和它同步

      在事件响应函数中，响应函数是给谁绑定的 this就是谁
  */
  //5.#checkedAllBox
  //为 id为checkedAllBox的按钮绑定单击响应函数
  checkedAllBox.onclick = function () {
    //设置多选框的选中状态
    for (var i = 0; i < items.length; i++) {
      //让四个多选框的状态与id名为checkedAllBox的按钮状态同步
      // items[i].checked = checkedAllBox.checked;
      items[i].checked = this.checked;

    }
  }
  //6.items
  /*
     如果四个多选框全都选中，则checkedAllBox也应该选中，
     如果四个多选框全都没选中，则checkedAllBox也不应该选中，
           也就是让 checkedAllBox的状态与四个多选框的状态同步
  */

  //为四个多选框分别判定单击响应函数,遍历多选框
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {

      //将checkedAllBox设置为选中状态
      checkedAllBox.checked = true;

      //为了获取每个多选框的状态，我们需要再次遍历多选框
      for (var j = 0; j < items.length; j++) {
        //判断四个多选框是否全选
        //反向思考，只要有一个多选框没选中，那么就不是全选
        if (!items[j].checked) {
          //一旦进去判断，则证明多选框不是全选状态
          //将checkedAllBox设为没选中的状态
          checkedAllBox.checked = false;

          //一旦进入判断，则已经得出结果，不用再继续执行循环，
          //因此我们可以用 break对性能进行提升
          break;
        }
      }


    };

  }
}