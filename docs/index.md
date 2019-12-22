# Clip To WorkFlowy Bookmarklet
- Bookmark webpages in WorkFlowy
- Create internal WorkFlowy links

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function C2W_2_9(){function eOPML(str){return str.replace(/&amp;/g,'&amp;amp;amp;').replace(/&lt;/g,'&amp;amp;lt;').replace(/&gt;/g,'&amp;amp;gt;').replace(/&quot;/g,'&amp;quot;').replace(/(\n)/g,'&amp;#10;')}function copyThat(str){const t=document.createElement(&quot;textarea&quot;);t.value=str;document.body.appendChild(t);t.select();const success=document.execCommand(&quot;copy&quot;);document.body.removeChild(t);return success}function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}const IS_WF=typeof WF===&quot;object&quot;&amp;&amp;typeof WF.currentItem===&quot;function&quot;;const copyAndToastExt=(str,message,isWF)=&gt;copyThat(str)?isWF?toastMsg(message,2):null:prompt(&quot;\nCopy failed.\n\nCopy this manually.&quot;,str);const name=eOPML(document.title.replace(/ - WorkFlowy$/,&quot;&quot;));const bullet=IS_WF?`&amp;lt;i&amp;gt;See: &amp;quot;${name}&amp;quot;&amp;lt;/i&amp;gt;`:name;const selection=window.getSelection().toString();const link=eOPML(location.href);const note=selection?`..${link}&amp;#10;&amp;#10;${eOPML(selection)}`:link;const clip=`&lt;opml&gt;&lt;body&gt;&lt;outline text=&quot;${bullet}&quot; _note=&quot;${note}&quot; /&gt;&lt;/body&gt;&lt;/opml&gt;`;copyAndToastExt(clip,&quot;Clip copied!&quot;,IS_WF)})();">Clip2WF</a>

## Links:
- [Source code](https://github.com/rawbytz/C2W/blob/master/C2W.js)
- [Read blog post here](https://rawbytz.wordpress.com/2015/11/21/clip-to-workflowy/)
- [Chrome Extension here](https://chrome.google.com/webstore/detail/clip-to-workflowy/cfifjihfoegnccifkcdomdookdckhaah)


<!-- 
LINKS REFERENCING THIS
@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG https://rawbytz.wordpress.com/?s=Clip+To+WorkFlowy

@WFBLOG https://blog.workflowy.com/?s=Clip+To+WorkFlowy
 -->
