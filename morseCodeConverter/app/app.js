var socket = io();


var alfabe = [ '\n','', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

var morsAlfabesi = [ "/"," ","/", ".-", "-...", "-.-.",
"-..", ".", "..-.", "--.", "....", "..", ".---",
"-.-", ".-..",  "--", "-.", "---", ".--.",
"--.-", ".-.", "...", "-", "..-", "...-", ".--",
"-..-", "-.--", "--..", ".----",
"..---", "...--", "....-", ".....",
"-....", "--...", "---..", "----.",
"-----" ];

var app = new Vue({
  el: '#app',
  data : {
    text : '',
    text2 : '',
    bt1 : 'TEXT TO MORSE',
    flag : true,
    spl : []

  },
  methods : {
    convert(){
     try {
      //text to morse
      if (this.text2 != '') {
        this.text2 = ' ';
      }
      if (this.flag == true) {
        for (var i = 0; i < this.text.length; i++) {
                  for (var j = 0; j < 39; j++) {
                      if (this.text[i].toLowerCase() == alfabe[j]) {
                          this.text2 += morsAlfabesi[j];
                          this.text2 += "\xa0";
                          break;
                      }
                  }
              }
      }
      //morse to text
      else if(this.flag == false){
            /* // morse code check
            var x = this.text.replace('/','');
             expr = "^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$";
             console.log(x);
             if(x.match(expr) == null){
                 M.toast({html: 'Enter the morse code!'});
                 return;
             }
             */

        this.spl = (this.text.split(' '));
        for (var i = 0; i < this.spl.length; i++) {
                for (var j = 0; j < 39; j++) {
                    if (morsAlfabesi[j] == this.spl[i]) {
                        this.text2 += alfabe[j];
                        break;
                    }
               }
        }

      }
    } catch(e) {
        M.toast({html: 'Exception: '+e});
        console.log('Exception: ', e)
    }


    },

    change(){

      if (this.flag == false) {
        this.bt1 = 'TEXT TO MORSE';
        this.flag = true;

      }else{
        this.bt1 = 'MORSE TO TEXT';
        this.flag = false;

      }
      this.clear();
    },

    clear(){
      this.text = '';
      this.text2 = ' ';
    }
}

});
