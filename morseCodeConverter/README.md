## VueJS, SocketIO and NodeJS with Morse Converter

This application translates the morse code to text and the text to morse code.

![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/screenShot1.png)
### -
![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/screenShot2.png)

### Installing


Clone the repository:

```sh
git clone https://github.com/emrekndl/morseCodeConverter.git
```

CD in to the directory:

```sh
cd morseCodeConverter
```

Install dependencies:

```sh
npm install
```

Start application:

```sh
node server.js
```

## Used Frameworks

* [SocketIO](https://socket.io/)
* [VueJS](https://vuejs.org/) 
* [NodeJS](https://nodejs.org/es/) 
* [Materialize-Css](https://materializecss.com/)


## Açıklama
Bu uygulama Node.js, Socket.IO ve Vue.js teknolojileri kullanılarak, bir websitesinde metin alanına girilen mors kodunu Latin alfabesine çevirir ve aynı şekilde sitedeki değiştirme butonuyla da Latin alfabesi yazılmış metni mors kodunu çevirir.
### 
- Sunucu servisi 'node server.js' komutu ile çalıştırılır.
- Konsol da uygulamanın başlatıldığı ve kacıncı portda çalıştığı yazdırılır.
- Bağlı ve bağlantısı kesilmiş istemciler için günlük kaydı yapılır.Yapılan kayıtlar konsolda canlı olarak yazdırılır ve ayrıca /log dizini altında user.log dosyasına kaydedilir.

![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/serverjs.png)

### 
- Uygulama 2 farklı arayüze sahiptir.
- Birinci arayüz, varsayılan olrak açılan sayfa, Latin alfabesindeki(ingiliz) metin alanına yazılan metinleri Convert butonuna tıklayarak Mors alfabesine dönüştürür ve ikinci metin alanına yazdırır.
- İkinci arayüz, Morse To Text butonuna tıklayarak açılan sayfa, Mors alfabesiyle yazılmış metin alanlarındaki metinleri(mors metnini yazarkan her harf arasına boluk konularak yazılmalıdır.) Latin alfabesine dönüştürür.
### 
![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/indexhtml.png)

### 
- Vuejs ile index.html den alınan girdilerle mors çevirme işlemi yapılır.
- Sayfadan metin alnından alınan girdiler mors alfabesi dizisinde karşılığı konrol edilerek diğer metin alanına yeni girdiler yazdırılır.
- Mors alfabesinden latin alfabesine çevirirken de girdinin latin alfabesi dizisindeki karşılığı konrol edilerek oluşan metin ikinci metin alanına yazdırılır.
### 
![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/appjs1.png)
### -
![Screenshot](https://github.com/emrekndl/morseCodeConverter/blob/master/appjs2.png)











