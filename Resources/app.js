
Titanium.UI.setBackgroundColor('#FFF');
var tabGroup = Titanium.UI.createTabGroup();
var win1 = Titanium.UI.createWindow({
   title:'自分で準備したHTMLを表示',
   backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var webView = Titanium.UI.createWebView({
});
webView.html =
  '<html>' +
    '<head>' +
      '<title>自分で準備したHTMLを表示</title>' +
    '</head>' +
    '<body>' +
      '<h1>自分でつくったHTMLコンテンツ表示する</h1>' +
      '<p>こんな感じでコンテンツが表示できます</p>' +
    '</body>' +
  '</html>';
win1.add(webView);

// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win2.add(label2);
//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
// open tab group
tabGroup.open();