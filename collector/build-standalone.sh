#!/usr/bin/env bash
# Build ONE self-contained board file that works when sent over Slack or email.
# The normal index.html loads finds.js separately; if you share only the HTML,
# that file is missing and the board opens blank. This inlines everything.
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)/board"
OUT="$D/FutureKimonos-Board.html"
node -e '
const fs=require("fs"), d=process.argv[1], out=process.argv[2];
let h=fs.readFileSync(d+"/index.html","utf8");
const finds=fs.readFileSync(d+"/finds.js","utf8");
if(!h.includes("<script src=\"finds.js\"></script>")) throw new Error("finds.js include not found");
h=h.replace("<script src=\"finds.js\"></script>","<script>\n"+finds+"\n</script>");
h=h.replace("<p class=\"note\" id=\"note\"></p>",
  "<p class=\"note\" id=\"note\"></p>"+
  "<p class=\"note\" style=\"border:1px solid var(--line);border-radius:8px;padding:10px 12px\">"+
  "<strong>Shared copy.</strong> Everything is inside this one file, so it works offline. "+
  "It is a snapshot — it will not pick up new finds. Your stars and rejects are saved in "+
  "this browser only: when you are done, press <strong>Save my review</strong> and send the box back."+
  "</p>");
fs.writeFileSync(out,h);
console.log("built "+out+" — "+Math.round(h.length/1024)+"KB, self-contained");
' "$D" "$OUT"
