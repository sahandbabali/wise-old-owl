var passage = "";
var question = "";

async function answer_questions() {
  document.getElementById(
    "answercard"
  ).innerHTML = `              <div id="spinnerbox">
  <img src="spinner.gif" alt="" srcset="" />
</div>`;

  let model = await qna.load();
  // or you can specify the model url.
  //config = {modelUrl: 'https://yourown-server/qna/model.json'};
  //customModel = await qna.load(config);
  passage = document.getElementById("textarea1").value;
  // console.log(passage);
  question = document.getElementById("textarea2").value;
  // console.log(question);
  const answers = await model.findAnswers(question, passage);
  console.log(answers);

  let score = answers[0].score;
  let text = answers[0].text;
  var card = `<div class="row">
  <div class="col s12 m12">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Answer</span>
        <p>
         ${text}
        </p>
      </div>
      <div class="card-action">
        <a href="#">Score: ${score}</a>
      </div>
    </div>
  </div>
  </div>`;
  document.getElementById("answercard").innerHTML = ``;
  document.getElementById("answercard").innerHTML = card;
}

console.log("Starting");
document.getElementById("subbot").addEventListener("click", answer_questions);
