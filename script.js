function remover(_this) {
  _this.closest("form").remove();
}

function add() {
  const content = document.getElementById("content");
  content.insertAdjacentHTML(
    "beforeend",
    /*html*/
    `
<form id="form1">
    <div class="box1-pag3" style="margin-top:50px;">

        <div class="box1-3-pag3">
            <input type="checkbox" name="incluir" id="incluir">
            <label for="incluir">Incluir este personagem na batalha</label>
            <input type="button" value="Remover" style="float: right" onclick="remover(this)">
            <div id="box" class="box">

            </div>
        </div>

        <div class="box1-2-pag3">
            <label for="nome_responsavel">Nome</label>
            <input type="text" id="nome_responsavel" name="nome_responsavel">
        </div>

        <div style="margin-left:15px;">
            <th>Nação</th>
        </div>
        <div class="box2-pag3">
            <table width="370px">
                <tr>
                    <td>
                        <input type="radio" id="anao" name="nacao" value="anao" checked>
                        <label for="anao">Anão</label>
                    </td>
                    <td>
                        <input type="radio" id="elfo_Floresta" name="nacao" value="elfo_Floresta">
                        <label for="elfo_Floresta">Elfo da Floresta</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" id="hobitt" name="nacao" value="hobitt">
                        <label for="hobitt">Hobbit</label>
                    </td>
                    <td>
                        <input type="radio" id="elfo de Lothorien" name="nacao" value="elfo de Lothorienn">
                        <label for="elfo de Lothorien">Elfo de Lothorien</label>

                </tr>
                <tr>
                    <td>
                        <input type="radio" id="cavaleiro de Rohan" name="nacao" value="cavaleiro de Rohan">
                        <label for="cavaleiro de Rohan">Cavaleiro de Rohan</label>
                    </td>
                    <td>
                        <input type="radio" id="orc Snagna" name="nacao" value="orc Snagna">
                        <label for="orc Snagna">Orc Snagna</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" id="cavaleiro de Gondor" name="nacao" value="cavaleiro de Gondor">
                        <label for="cavaleiro de Gondor">Cavaleiro de Gondor</label>
                    </td>
                    <td>
                        <input type="radio" id="uruk-hai" name="nacao" value="uruk-hai">
                        <label for="uruk-hai">Uruk-hai</label>
                    </td>
                </tr>
            </table>
        </div>
        <div style="margin:-85px 125px 0px 160px; float:right">
            <th>Habilidades</th>
        </div>
        <div class="box3-pag3">
            <table>
                <tr>
                    <td><label for="forca">Força</label></td>
                    <td><input type="number" name="habilidades" value="20"
                            style="width:100px; text-align:center; border-radius:10px"></td>
                </tr>
                <tr>
                    <td><label for="precisao">Precisão</label></td>
                    <td><input type="number" name="habilidades" value="20"
                            style="width:100px; text-align:center; border-radius:10px"></td>
                </tr>
                <tr>
                    <td><label for="velocidade">Velocidade</label>
                    <td><input type="number" name="habilidades" value="20"
                            style="width:100px; text-align:center; border-radius:10px"></td>
                </tr>
                <tr>
                    <td><label for="armadura">Armadura</label>
                    <td><input type="number" name="habilidades" value="20"
                            style="width:100px; text-align:center; border-radius:10px"></td>
                </tr>
                <tr>
                    <td><label for="Recuperacao">Recuperação</label>
                    <td><input type="number" name="habilidades" value="20"
                            style="width:100px; text-align:center;border-radius:10px"></td>
                </tr>
            </table>
        </div>
    </div>
</form>
`
  );
}
