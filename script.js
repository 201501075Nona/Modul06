(function(){
function Question(question, answers, correct){
this.question = question;
this.answers = answers;
this.correct = correct;
}
Question.prototype.displayQuestion = function(){
console.log(this.question);
for(var i = 0; i< this.answers.length;i++){
console.log(i + ':' + this.answers[i]);}
}
Question.prototype.checkAnswers = function(ans)
	{
		if(ans===this.correct)
		{
			skorAkhir += 1;
			console.log('Jawaban benar!!');
			console.log('');
		}
		else
		{
			console.log('SALAH!! Coba lagi!');
			jawabSalah +=1;
			console.log('');
		}
	}
var q1 = new Question('apakah JavaScript bahasa pemrograman paling keren sedunia?', ['ya','Enggak'],0);
var q2 = new Question ('siapa nama dosen yang mengajar kuliah ini?',['John','mikael','oskar'],2);
var q3 = new Question('kata yang paling bagus mendeskripsikan koding',['bosen','susah','membahagiakan','membosenkan'],2);
var q4 = new Question('siapa nama presiden saat ini!(2018)',['soekarno','jokowi','soeharto'],1);
var q5 = new Question('hari pahlawan jatuh pada tanggal?',['11 januari','21 april','10 november'],2);
var q6 = new Question('Mata Kuliah pemrograman web kelas C ada pada hari?',['senin','selasa','rabu'],0);
var q7 = new Question('Mata Kuliah pemrograman web ada pada mata kuliah semester?',['2','4','6'],2);
var q8 = new Question('a= 100 b=20 maka a x b =...',['2000','200','20'],0);
var q9 = new Question('Stikom mempunyai berapa jurusan S1?',['2','3','4'],1);
var q10 = new Question('apakah git hub termasuk mata Kuliah pemrograman web?',['tidak tau','ya','tidak'],1);

var questions =[q1, q2, q3, q4, q5,q6,q7,q8,q9,q10];
var skorAkhir=0;
var jawabSalah=0;
var jumlahSkor=0;

akhiriPermainan:
{ for(;;)
{

var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
var answers= prompt('pilih jawaban yang benar!');

if (answers =='exit')
{
console.log('');
console.log('permainan berakhir');
console.log('');
console.log('jumlah pertanyaan yang di jawab =' +jumlahSkor);
console.log('jumlah pertanyaan yang salah ='+jawabSalah);
console.log('jumlah skor = '+skorAkhir);
break akhiriPermainan;
}
jumlahSkor+=1;
questions[n].checkAnswers(answers);
}
}

})();