// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
   title:'簡易ブラウザ',
   backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});
/*
 URLを入力するテキストボックスを作成
 URL入力して内容確定した時にイベント発火させて
 wevbiewのURLプロパティに値を渡す
*/
var urlBox = Titanium.UI.createTextField({
  color:'#336699',
  top:10,
  left:10,
  width:200,
  height:40,
  hintText:'enter url',
  keyboardType:Titanium.UI.KEYBOARD_URL,
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
  autocapitalization: false,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

urlBox.addEventListener('blur',function(e){
  Ti.API.info(actInd);
  actInd.show();
  webView.url = e.value;
  webView.reload();

});
win1.add(urlBox);
var actInd = Titanium.UI.createActivityIndicator({
  top:50,
  height:55,
  width:'auto',
  color:'#FFFFFF',
  backgroundColor:'#000',
  opacity:0.5,
  borderRadius:5,
  borderColor:'#000',
  font:{fontFamily:'Helvetica Neue', fontSize:13},
  message:' Loading...',
  style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});
win1.add(actInd);


var webView = Titanium.UI.createWebView({
  top:50,
  left:0,
  width:'auto',
  height:'auto'
});

webView.addEventListener('load',function(e){
  actInd.hide();
});
win1.add(webView);


//
//  add tabs
//
tabGroup.addTab(tab1);


// open tab group
tabGroup.open();
