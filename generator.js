const config = {

  "indent_size": "2",

  "indent_char": " ",

  "max_preserve_newlines": "5",

  "preserve_newlines": true,

  "keep_array_indentation": false,

  "break_chained_methods": false,

  "indent_scripts": "normal",

  "brace_style": "collapse",

  "space_before_conditional": true,

  "unescape_strings": false,

  "jslint_happy": false,

  "end_with_newline": false,

  "wrap_line_length": "40",

  "indent_inner_html": false,

  "comma_first": false,

  "e4x": false,

  "indent_empty_lines": false

};

let _textArea=document.querySelector("textarea"),_btn=document.querySelector("button");_btn.addEventListener("click",()=>{let e=_textArea.value,t=document.createElement("div");t.innerHTML=e;let r=t.querySelectorAll("img"),c=new Array;r.forEach(e=>c.push(`"${e.src}"`)),_textArea.value=`<div id='readarea'>

  <div id='chapterImage'></div>

  <div id='chapterImageLoad'>

    <i class='fas fa-sync fa-spin'></i></div>

  <span><a name='more'></a></span></div>

<script><a href="https://trakteer.id/komikrealm" title="Menuju link donasi">

   <img src="https://i.ibb.co/vPhZn5Q/IMG-20230408-WA0010.jpg" alt="Donasi" width="100%" border=0 >

</a></script>

  <script type="text/javascript">

const _chapterImage = [${c.join(", ")}]

  </script>`});
