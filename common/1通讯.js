/*
通讯-Ajax通讯基础方法
Atype："GET"或"POST"。
AAsync：true-异步，false-同步。
AUrl：请求的url。
AData：通讯数据。
Afun：回调方法。
*/
function BasaComm(AType,AAsync,AUrl,AData, Afun) {
    $.ajax({
        type: AType,
        async: AAsync,
        contentType: "application/json",
        url: AUrl,
        data: { "param": AData, "rn": Math.floor(Math.random() * 100 + 1) },
        dataType: 'json',
        beforeSend: function () { },
        success: Afun,
        error: function (xhr, textStatus, errorThrown) { 
        //alert("返回值："+xhr.responseText +"状态码：" + xhr.readyState+"status:"+xhr.status+"textStatus:"+textStatus); 
        }
    });
}

/*
通讯-异步-GET
*/
function Comm_Async_Get(AData, Afun) {
    var Atype="GET";
    var AAsync="true";
    var AUrl="/Handler/DataHandler.ashx";
    BasaComm(AType,AAsync,AUrl,AData,Afun);
}

/*
通讯-异步-POST
*/
function Comm_Async_POST(AData, Afun) {
    var Atype="POST";
    var AAsync="true";
    var AUrl="/Handler/DataHandler.ashx";
    BasaComm(AType,AAsync,AUrl,AData,Afun);
}

/*
通讯-同步-GET
*/
function Comm_Sync_GET(AData, Afun) {
    var Atype="GET";
    var AAsync="false";
    var AUrl="/Handler/DataHandler.ashx";
    BasaComm(AType,AAsync,AUrl,AData,Afun);
}

/*
通讯-同步-POST
*/
function Comm_Sync_POST(AData, Afun) {
    var Atype="POST";
    var AAsync="false";
    var AUrl="/Handler/DataHandler.ashx";
    BasaComm(AType,AAsync,AUrl,AData,Afun);
}
