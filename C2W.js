(function C2W_2_9() {
  function eOPML(str) {
    return str
      .replace(/&/g, '&amp;amp;')
      .replace(/</g, '&amp;lt;')
      .replace(/>/g, '&amp;gt;')
      .replace(/"/g, '&quot;')
      .replace(/(\n)/g, '&#10;');
  }
  function copyThat(str) {
    const t = document.createElement("textarea");
    t.value = str;
    document.body.appendChild(t);
    t.select();
    const success = document.execCommand("copy");
    document.body.removeChild(t);
    return success
  }
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  const IS_WF = typeof WF === "object" && typeof WF.currentItem === "function";
  const copyAndToastExt = (str, message, isWF) => copyThat(str) ? isWF ? toastMsg(message, 2) : null : prompt("\nCopy failed.\n\nCopy this manually.", str);
  const name = eOPML(document.title.replace(/ - WorkFlowy$/, ""));
  const bullet = IS_WF ? `&lt;i&gt;See: &quot;${name}&quot;&lt;/i&gt;` : name;
  const selection = window.getSelection().toString();
  const link = eOPML(location.href);
  const note = selection ? `..${link}&#10;&#10;${eOPML(selection)}` : link;
  const clip = `<opml><body><outline text="${bullet}" _note="${note}" /></body></opml>`;
  copyAndToastExt(clip, "Clip copied!", IS_WF)
})();