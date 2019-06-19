<template>
  <div id="header" class="g-hdw">
    <div id="J_Header" class="g-hd">
      <div class="m-topbar">
        <div class="inner f-cb" data-reactid=".1">
          <div data-reactid=".1.0">
            <ul class="sns f-cb" data-reactid=".1.0.0">
              <li data-reactid=".1.0.0.0">
                <a href="#" title="云阅读" data-reactid=".1.0.0.0.0">云阅读</a>
              </li>
            </ul>
            <div class="m-codelayer" style="display:none;" data-reactid=".1.0.1">
              <img
                src="https://easyreadfs.nosdn.127.net/web/trunk/1488264973044/code-gzh.png"
                data-reactid=".1.0.1.0"
              >
            </div>
          </div>
          <div data-reactid=".1.1">
            <div class="ulink j-ulink" data-reactid=".1.1.0">
              <a class="login" title="登录" data-reactid=".1.1.0.0">登录</a>
              <span class="sep" data-reactid=".1.1.0.1">|</span>
              <a target="_blank" title="注册" data-reactid=".1.1.0.2">注册</a>
              <span class="sep" data-reactid=".1.1.0.3">|</span>
            </div>
            <noscript data-reactid=".1.1.1"></noscript>
          </div>
        </div>
      </div>
      <div class="m-headertop">
        <div class="inner">
          <h1 class="m-logo">
            <a href="/">云阅读</a>
          </h1>
          <div class="m-sch">
            <div data-reactid=".2">
              <form class="J_Form" action="/search.do" data-reactid=".2.0">
                <input
                  type="text"
                  class="s-placeholder"
                  name="key"
                  autocomplete="off"
                  value="尸语者"
                  data-reactid=".2.0.0"
                >
                <input type="hidden" name="type" value="4" data-reactid=".2.0.1">
                <button type="submit" data-reactid=".2.0.2">
                  <span data-reactid=".2.0.2.0">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </button>
              </form>
              <span data-reactid=".2.1"></span>
            </div>
          </div>
          <div class="m-clouds">
            <a class="m-cloudsj" href="/" target="_blank">我的书架</a>
          </div>
        </div>
      </div>
      <div class="m-headerbottom">
        <div class="inner">
          <ul class="m-mianlist">
            <li>
              <a class="crt" href="/index">首页</a>
            </li>
            <li>
              <a class href="/book" onclick="_gaq.push(['_trackEvent', 'navi', 'publish']);">出版图书</a>
            </li>
            <li>
              <a class href="/yc" onclick="_gaq.push(['_trackEvent', 'navi', 'yc']);">国风中文网</a>
            </li>
            <li>
              <a class href="/ycmm" onclick="_gaq.push(['_trackEvent', 'navi', 'ycmm']);">采薇书院</a>
            </li>
            <li>
              <a class href="/rank" onclick="_gaq.push(['_trackEvent', 'navi', 'rank']);">排行榜</a>
            </li>
            <li class="fr">
              <a
                href="/client"
                target="_blank"
                onclick="_gaq.push(['_trackEvent', 'navi', 'client']);"
              >
                <b class="icon-download"></b>客户端
              </a>
            </li>
            <li class="fr">
              <a
                href="/recharge.do?operation=form"
                onclick="_gaq.push(['_trackEvent', 'navi', 'recharge']);"
              >
                <b class="icon-recharge"></b>充值
              </a>
            </li>
            <li class="fr">
              <a
                href="http://open.yuedu.163.com/"
                target="_blank"
                onclick="_gaq.push(['_trackEvent', 'navi', 'open']);"
              >
                <b class="icon-open"></b>作者中心
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
