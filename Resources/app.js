Titanium.UI.setBackgroundColor('#FFF');
var tabGroup = Titanium.UI.createTabGroup();
var win1 = Titanium.UI.createWindow({
   title:'簡易ブラウザ',
   backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// １．URLを入力できるテキストフィールドを準備
var urlBox = Titanium.UI.createTextField({
  color:'#336699',
  top:10,
  left:10,
  width:200,
  height:30,
  hintText:'enter url',
  keyboardType:Titanium.UI.KEYBOARD_URL,
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
  autocapitalization: false,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
urlBox.addEventListener('blur',function(e){
  actInd.show();
  webView.url = e.value;
  webView.reload();

});
win1.add(urlBox);

// ２．読み込み処理を中止するボタンを準備
var stopBtn = Ti.UI.createButton({
  title:'stop',
  top:10,
  left:220,
  width:60,
  height:30,
  systemButton:Titanium.UI.iPhone.SystemButton.STOP
});
stopBtn.addEventListener('click',function(e){
  webView.stopLoading();
  actInd.hide();
});
win1.add(stopBtn);

// ３．HTMLコンテンツを表示するためのWebViewを準備
var webView = Titanium.UI.createWebView({
  top:50,
  left:0,
  width:'auto',
  height:'auto'
});
webView.addEventListener('beforeload',function(e){
  actInd.show();
});
webView.addEventListener('load',function(e){
  actInd.hide();
});
win1.add(webView);

// ４．「読み込み中」ということを示すためのActivityIndicatorを準備
var actInd = Titanium.UI.createActivityIndicator({
  top:50,
  height:55,
  width:'auto',
  opacity:0.5,
  color:'#FFFFFF',
  backgroundColor:'#000',
  borderRadius:5,
  borderColor:'#000',
  font:{fontFamily:'Helvetica Neue', fontSize:13},
  message:' Loading...',
  style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});
win1.add(actInd);

tabGroup.addTab(tab1);
tabGroup.open();