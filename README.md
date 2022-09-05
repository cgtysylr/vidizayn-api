## Vidizayn Test Case

Mysql'e bağlı bir müşterileri tutan ve onları API olarak sunan uygulama.

## Kurulum

<div class="snippet-clipboard-content notranslate position-relative overflow-auto">
<pre class="notranslate" style="position: relative;">
<code>
cp .env.example .env
npm install
npx sequelize-cli db:seed:all
nodemon app.js
</code>
</pre>
</div>
