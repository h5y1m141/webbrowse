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
/
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
tabGroup.addTab(tab1);
tabGroup.open();
