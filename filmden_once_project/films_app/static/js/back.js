var firebaseConfig = {
    apiKey: "AIzaSyCeFqigFCtVhP-695j6HGF7THnY16OVdLY",
    authDomain: "filmdenonce-443b8.firebaseapp.com",
    databaseURL: "https://filmdenonce-443b8.firebaseio.com",
    projectId: "filmdenonce-443b8",
};

firebase.initializeApp(firebaseConfig);
// var films
var database = firebase.database();

database.ref("films/").on('value', function (snapshot) {
    films = snapshot.val();

    $('.fav-films-block').html('')

    var counter = 0;
    for (let i in films) {
        if (counter == 6) {
            break;
        }
        var div = '<div class="movie-beta__item ">'+
    '                        <img class="pic" alt="picture" src="' + films[i].poster + '">'+
    '                         <span class="best-rate">5.0</span>'+
    '                         <ul class="movie-beta__info">'+
    '                             <li><span class="best-voted">71 people voted today</span></li>'+
    '                             <li>'+
    '                                <p class="movie__time">169 min</p>'+
    '                                <p>Adventure | Drama | Fantasy </p>'+
    '                                <p>38 comments</p>'+
    '                             </li>'+
    '                             <li class="last-block">'+
    '                                 <a href="movie-page-left.html" class="slide__link">more</a>'+
    '                             </li>'+
    '                         </ul>'+
    '                     </div>';

    counter++;

        $('.fav-films-block').append(div);
    }
    $('.movies1').html('')
    var sayi=0;
    for(let i in films){
        if(sayi==8){
            break;
        }
        var myvar = '               <!-- Movie variant with time -->'+
        '                        <div class="movie movie--test movie--test--dark movie--test--left">'+
        '                            <div class="movie__images">'+
        '                                <a href="movie-page-left.html" class="movie-beta__link">'+
        '                                    <img alt=\'\''+
        '                                        src="' + films[i].poster + '">'+
        '                                </a>'+
        '                            </div>'+
        ''+
        '                            <div class="movie__info">'+
        '                                <a href=\'movie-page-left.html\' class="movie__title">'+films[i].name+' </a>'+
        ''+
        '                                <p class="movie__time">'+films[i].duration+'</p>'+
        ''+
        '                                <p class="movie__option"><a href="#">Sci-Fi</a> | <a href="#">Thriller</a> | <a'+
        '                                        href="#">'+films[i].genre+'</a></p>'+
        ''+
        '                                <div class="movie__rate">'+
        '                                    <div class="score"></div>'+
        '                                    <span class="movie__rating">4.1</span>'+
        '                                </div>'+
        '                            </div>'+
        '                        </div>'+
        '                        <!-- Movie variant with time -->';
            
        
    sayi++;
  

    $('.movies1').append(myvar);
    }

});


function doldur() {
    var movies = [{
        "id": "001",
        "name": " Spider-man:Into the Spider-Verse",
        "text": "Herkese selamlar.Nasılsınız?Herkes delicesine Spider-man:Into the Spider-Verse incelemesi yaparken,biz neden yapmayalım dedik.Biz internete sızdırılan versiyonunu izledik ve son sahne ve after credits sahnesini göremedik.Şimdi nerden başlayacağımızı henüz karar veremedik.Spider-Man: İnto the Spider-Verse iyi anlamda kafa karıştıran beklenmedik süprizlerle dolu bir çizgi filmiydi.Çizgi film dememize bakmayın, 7-70e herkesin seveceği tarzda yapılmış.Olaylar o kadar hızlı gelişiyodu ki, fark edemiyorduk.Gerek espirileri gerek müzikleri gerek hikayesi ile bizi büyüledi.14 aralıkda vizyona girmesine rağmen şuanki puanı imdb 8.8.Kötü kalitede izlememize rağmen çok beyendik.Filmde olan beklenmedik olaylar bizi hem üzdü hem heyecanlandırdı hemde eğlendirdi.Vizyona 4 gündür girmesine rağmen 10-dan fazla ödül aldı.Bizim puanımızı 10 üzerinden 9.Oda son sahne ve görüntü kalitesine göre 1 puan kesdik.Genel olarak spoilersiz konuşmak istedik çünki bir çoğunuz izlememişsinizdir büyük ihtamalle.Hasılatı şimdilik $56.4 million.Büyük ihtamalle haftasonu bu rakam 2 kat fazla olucak.Yalnızca Spiderman sevenlerin değil aynı zamanda her kesin seveceğine canı gönülden inanıyoruz.Miles Morales beklentimizin üstündü bir performans yaptı.Sony bu sefer iyi iş çıkarmış.Şimdilik spoilersiz bu kadar diyeceklerimiz.Eğer internete sızdırılan versiyonu izlemek istiyorsanız bizimle iletişime geçe bilirsiniz. "
    },
    {
        "id": "002",
        "name": "Venom",
        "text": "Bu akşam 2018 e ses getiren Marvel hayranlarının heyecanla beklediği Venom filminin incelemesini yaptık.Öncelikle filmin muhteşem atmosferi ve özellikle aksiyon filmlerini seviyorsanız mutlaka kaçırmayın. :) Eddie Brock hırslı bir muhabirdir. Sevgilisinin çalıştığı araştırma firmasının sahibi de peşinde olduğu hikayelerden biridir. Kötü niyetli ve kendi amaçları doğrultusunda hareket eden bu adamın hikayesinin peşinde koşarken, Eddie, sadece simbiyoz hâlinde yaşayabilen ve adrenalinle beslenen uzaylı bir organizmanın firma tarafından keşfedildiğini ve insan deneklerle birleştirilmeye çalışıldığını öğrenir. Ancak araştırmasında fazla ilerleyen Eddie, Venom adı verilen bu organizmanın sıradaki taşıyıcısı olur. Bir yandan vücudunu ve zihnini kontrol altına alan organizmayla mücadele eden Eddie, bir yandan da firma sahibinin kendisini öldürmesi için gönderdiği kişilerden kaçmalıdır.  Marvel çizgi roman evreninin ezeli kötülerinden Venomun beyaz perde uyarlaması olan filmde Venoma Tom Hardy hayat veriyor. Filmde 4 Oscar adaylığı bulunan Michelle Williams, 2 Oscar adaylığı bulunan Woody Harrelson, Altın Küre adayı Rüz Ahmed, Jenny Slate de yer alıyor."

    },
    {
        "id": "003",
        "name": "Love The Coopers",
        "text": "Yılbaşı filmlerinin popüler olduğu aralık ayına hoş geldiniz.Nasılsınız? Bu gün sizlere sıradan bir aile filmi önericez.Biraz komedi,biraz yılbaşı ile sıcacık aile ortamını fark ede bileceğiniz Love The Coopers filminin incelemesi sizlerle.Film 2015 yılında vizyona girmiş ve Coopers ailesini konu alıyor.Coopers ailesi yılda sadece bir kez bir araya toplanıyor ve her kes o günü mahv etmemek bir- birini üzmemek için yalan dolan birşeyler anlatıyor.Oysaki kendileri asla olamıyorlar.Ama bu yılbaşı tamamen farklı olucak.İmdb puanı 5.7 . Bizim puanımız ise 6.Kadroda iyi oyuncular yer almakta mesela Olivia Wilde,John Goodman gibi isimler.Genel olarak, her yaş, cinsiyet ve cinsel yönelimi temsil eden karakterlerin hikayelerini paralel anlatarak, geniş bir seyirci kitlesini perdeye bağlamış.Ve son olarak Bob Dylan parçalarına da yer veren müzik seçimlerini seveceğinizi düşünüyoruz. İyi seyirler."

    },
    {
        "id": "004",
        "name": "The Protector",
        "text": "Herkese merhaba.Yine uzun zamandır ortalıkta yoktuk.Ve uzun zamandır film ve ya dizi izlemiyorduk.Dün bayadır beklediğimiz bir dizi vizyona girdi.Bizde fırsat bu fırsat sizlerle fikilerimizi bölüşmek için acele olarak bu gün ilk sezonu bitirdik.Muhafız her kesin yaklaşık 1 senedir beklediği Netflixdeki ilk türk dizisi.Spoiler vermeden konuşmaya çalışıcağız çünki,bir çoğunuz izlememişsinizdir muhtemelen.İlk sezon 10 bölümden ibaret ve her bölüm yaklaşık 30 dakika sürüyor.Kadro geniş ve süpriz isimler var.Oyuncular arasında en iyi rolünü üstlenen tabi ki de, Çağatay Ulusoydur.Kendisini oynadığı oyunculukdan dolayı tebrik ediyoruz.Okan Yalabık, Hazar Ergüçlü gibi isimlerin oyunculuğunu da göz ardı etmememiz gerekir.Film başlarda dialoglara çok yer verilmiş olsa da sonu her film ve dizide olduğu gibi uçmalı kaçmalı yani fazla aksiyonluydu.Dizi diğer izlediğiniz yabancı diziler gibi olmaya bilir, bekletinizi karşılamaya bilir.İlk iş olduğundan biraz bekletiniz aşağısında kalıyor.Evet dizide fazla dialog vardı,artı bazı çekim hataları vardı, müzikleri çok da iyi değildi.Bir tık iyi ola bilirdi.Bazı karakterler iyi işlenmemişdir ve fragmanda gördüğünüz gibi fazla fantastik sahneler göremezsiniz malesef.Şimd sorucaksınız bu kadar gömdünüz hiç mi iyi yanı yoktu?Hikayesi iyiydi ama bizim aklımızda başka bir senaryo vardı şimdi burda söylemiyelim spoiler olur.2ci sezon çok daha iyi olucak ve beklentimizi karşılıcak.Bizim puanımız şimdilik 10 üzerinden 6 aslında 7-de ola bilir.Ilk iş olduğu için bunları göz ardı ede biliriz.Fantastik ve süper kahraman tarzına mesafeli seyircimize çok güzel bir köprü olacakmış gibi geliyor.Protector, İstanbul’da geçen, Dan Brown ve Marvel karışımı gibi bir hikaye. Bunu izleyicilerin de seveceğini düşünüyorum.Can Evrenola bu sözleri kullandı.Bu yüzden biz Can Evrenola güveniyoruz.Bir sonrakı sezona daha iyi çıkaracağından eminiz.KendisiniBaskın, Housewife gibi uzun metraj filmleriyle tanıyoruz ve çok yetenkli olduğunu düşünüyoruz.Türk dizilerinin konusu hep aşk, aile, üzerine yapılıyor.Bir çok insan bıktı ve bu kavramı dağıtacak dizi belki de Protectordur.Muhafızı her kesin izlemesini tavsiyye ederiz en azından 1 kere bile olsa izleyin."
    },
    {
        "id": "005",
        "name": "Arrival",
        "text": "Günaydın millet.Siz bunu okurken sabah olur zaten.Bu gün elimizde Arrival filminin incelemesiyle geldik.Bu film incelemesi sadece yüzeysel ve şahsi fikirlere dayanarak incelenmişdir.Başta söyliyelim bu filmin fragmanını izlemiştik ve film hakkında düşüncelerimiz eksi yönündeydi.Bizim beklentimiz dünyanın sonu geliyor uzaylılar dünyayı işgal gelmişler.Ana karaterimizinde başına türlü türlü olaylar geliyor falan filan.Ta ki, @firuze.ab önerdiği zamana kadar.Fragmanı izleyen bir çok kişi zaten aksiyon dolu bir film olduğunu düşünüyorlar.İzledikden sonra filmin şaheser olduğunu fark etdik.Film için çook ama çok teşekkür ederim @firuze.ab yine bu tür film önerlerini sizden bekleriz.Evet saniye saniyesine gergin dolu anlar yaşatan Arrival 2016da vizyona girdi.Senaryo çok efsaneydi .Bazı sahneler eksik gibiydi yada çok yer verilmemişdi.Ama olayların çabuk ilerlediyi ve 1 saniye bile sizi sıkmayan bir film olduğu için göz önünde belirmiyordu.Bu yıl izlediğimiz filmler arasında Arrival zirveyi koruyacak potansiyeldedir.Kitlesi her kese hitap edicek bir film.Türü ise dram ve gizem .Muazzam harika kelimelerini defalarca kullanmak istemiyoruz ama film hakk ediyor.Aynı kelimeleri oyuncu kadrosu içinde geçerlidir.Listede tanıdık isimlerden Amy Adams,Jeremy Renner,Forest Whitaker yer almakta.Arrivala verilicek puanımız 9.Belki de 2ci bölüm gelir ve yeniden devam eder,kim bilir.Uzaylılarla ilgili filmleri sevmiosanız bile bu filmi muhakkak izleyin.Şimdi size bir soru sorucam ya siz olsaydınız napardınız savaşırdınızmı yoksa konuşurdunuzmu yada yeni bir çözüm yolu üretirdiniz.Ya gerçekten zaman oku yoksa ,gerçekten gelecek yaşamışsa, geçmişi hatırlıyoruz ya geleceği? Bu sorular filmi izledikden sonra kafanızı karıştırıcakdır.İyi seyirler."
    },
    {
        "id": "006",
        "name": "Ejderha dövmeli kız",
        "text": "Her kese selamlar.Nasılsınız millet.Bundan sonra her cuma ve ya cumartesi günü sizlerden gelen bir filmi inceliyerek yorumluyucaz.Bu haftaki filmimiz @pisdora tarafından önerilen Ejderha dövmeli kız ve böyle güzel film için teşekkürler.Film 16 yaş ve üzeri insanlara hitap olunur!!!.Öncelikle şunu söyleyebiliriz ki, gerçekten gizem dolu bir filmdi.Filmin giriş müziği zaten insanı etkiliyor.Türü detektifdi.İzlerken sıkılmadığımız ve sonu merak etdiğimiz filmlerdendi.Film 2 ana hat olarak başlıyo ve olaylar öyle gelişiyorki bu 2 hat ileride bir birine bağlı oluyor.Konusu bir ailenin başına gelen bir trajedi ve gizli olay.Fazla senaryo hakkında konuşmak istemiyoruz, filmin tadını bozmayalım.Oyuncular çok iyiydi. James Bond filminden tanıdığımız Daniel Craig yer alıyor ve baş rollerimizden biri kendisi.Filmin son sahnesini bizim düşüncemizle gereksizdi.Sahne tam çekilmemiş gibi duruyor, yani böyle bitmemesi gerekiyordu.Film 2011 de vizyona girdi ve 2ci kısım önümüzdeki ayın 9-u vizyona giricek.İlk film daha ağırdı ve daha etkiliydi.2ci filmle alakalı çok bir şey söylemek istemiyoruz ama ilkiyle senaryo alakası yok gibi duruyor.Fragmandan gördüğümüz kadarıyla.Daha haraketliydi ve aksiyon fazlaydı.Bize sorarsaniz 2ci film olmamış.İlk filmi her kese öneriyoruz muhakkak izlemeniz gerekiyor.Geçen incelediğimiz Antman ve Waspdan kat kat iyi bir film olduğunu düşünüyoruz.İkinci filmin ismi the girl in the spiders web olarak geçiyor.Oyuncuların hepsi değişmiş.Ilk filme verilecek puanimiz 9.Evet bizden bu kadar eğer sizde böyle sevdiğini fimler varsa bizimle iletişime geçin.Kim bilir belkide gelicek haftakı film sizin seçminiz olur.Filmle kalın 🎥 🎥 🎥 ."


    },
    {
        "id": "007",
        "name": "Ant-man and Wasp",
        "text": "Selamın Aleyküm.Bu gün yine elimizde bi filmle geldik.Ant manı bir çoğunuz tanıyorsunuzdur.Başta söyliyelim ilk filmini izlemedik ama civil war ve 2ci izledik.Bu gün 2ci filmini konu alıcaz.Film aylar önce vizyona girsede yine de biz internetden izledik.Neden çünkü internetde bedava.Neyse geçelim filme.Film başlarda biraz haraketsiz başlasa da sonra toparladı.Her kahraman filminde olduğu gibi biraz aksiyon bir tane kötü karakter biraz hüzün ve sonda mutluluk.Evet böyleydi gerçekten.Her Marvel filmde olduğu gibi geleneğe sadık kalarak Stan Lee -yi bir sahnede görmek nasip oldu.Film hakkında insanların yorumlarına baktımığızda 3 yorum 1 negatif.Aslında Marvel filmi olmasaydı belkide bu kadar izleyicinin dikkatini çekmezdi diye biliriz.Bir puan burdan verdik.Espiriler iyiydi baya güldük bazılarına 1 puan burdan verelim.Filmdeki olaylar Civil Warla -İnfinity Warın arasında yer alıyor.Filmin İnfinity Wara bağladıkları için bir puanda burdan verelim.Filmin kötü yanı yokmuydu aslında fazla beklenti yokdu zaten insanlarda.Bu yüzden fazla eleştiri almadı.Waspla ilgili bir kaç şey söylemek gerekiyor iyi bir ekip oldular.Kötü karakterimizin kendince gerekli sebepleri olsada biraz uyumsuzdu.Pek dikkat çekmedi.E hadi puan verelim 10 üzerinden 6.Ant -man karakteri Spiderman ve Black Pantherle kıyaslasak bir tık düşüktü.Avengers 4de Antman bizi şaşırtır.İyi Seyirler."


    },
    {
        "id": "008",
        "name": "Solo",
        "text": "Hayde başlayalım.Eveet nasılsınız özlediniz mi?Biz çok özledik sizi.Bu gün size elimizde bir filmle geri döndük.Yıldız savaşlarından tanıdığımız Harrison Fordun canlandırdığı Han Solo karakterini değil de ,Alden Ehrenreichin (ismi de ne zormuş yav)canlandırdığını konuşucaz.Bu film 25 mayıs vizyona girmesine rağmen biz ekimde izleye bildik anca.Napalım oğlum öğrenciyiz her defasında sinemaya para veremiyoruz.Neyse allahtan internetde varda izleye biliyoruz.Evet Han Soloya dönelim.İlk şunu söyliyeyim bir çok kişi oyuncunun değişmesine kızıcak ve haklılar da, bundan önceki filmde Han Soloyu öldürüp şimdi filmini yapmanız falan para için yapıorsunuz falan diceksiniz.Haqlısınızda, film çöp .Tamam oyuncu kadrosu iyi.Emilia Clarke ,Woody Harrelson iyi oyuncularda ama onlar bile kurtarmıo filmi.Nedenini söyliyim Ha Solo karakteri gizemli bir karakter olarak bizim gönülleri fethetti.Aramızda merak edenler de var ama böyle çöp senaryoyla anlatılmamalı.Şimdi diceksiniz moruk sen kimsin eleştiriyosun.Haklısınızda ben kimseyim ama sonuç ortada Disney yine çocukça bir film yapmış.Filmde kan vahşet aksiyon gerilim hiçbirşey yok.Ama sadece Darth Maulu görmek çok hoşuma gitdi.Aynı oyuncunun oynamasıda ekstra hoşuma gitdi.Diğer Star Wars filmlerinde olduğu gibi sonda iyiler kazanıyor, kötüler kayb ediyor falan filan işte.Filmi 1 kere izlerim oda Star Warsla alakalı olduğu için.Ama normalde izlemem.Oyuncuların değişmesi kötü olmuş bir puan ona kırdım.Senaryo bok 1 puan ona kırdım.Bir kere filmde gerilim korku yok bir puan ona .Oyuncu kadrosu iyiydi Darth Maulu görmek güzel oldu başka bişey yok 5 veririm 10 üzerinden hiç sevmedim.Bide Han Solo yetmezmiş gibi Darth Vader Solo, Kenobi Solo filmini çekicekler.Hadi hayırlısı, Kenobinin güzel olucağına dua ediyorum.İyi seyirler."

    },
    {
        "id": "009",
        "name": "The theory of everything",
        "text": "Selam millet nasılsınız?Geçen günlerde izlediğim bir filmden bahs etmek istiyorum.Filmi çoğunuz izlemişsinizdir,ismi Theory of everything.2014 -de vizyona giren bu film, ünlü fizikçi Stephen Hawkingin hayatını konu alıyor.Cidden duygusal ve motive edici bir film olduğunu düşünmekteyiz.Film Hawking’in 60′lı yıllardaki yaşamını, sağlığına ilişkin kötü haberleri aldığı dönemi ve hepsinden de önemlisi eşi Jane ile olan ilişkisini anlatıyor ve cidden çok etkileyici.Filmin imdb puanı 7.7,bizim ise puanımız 8.İzlemenizi tavsiye ederiz.İyi seyirler "



    },
    {
        "id": "010",
        "name": "The Purge 4",
        "text": "2018 -in beklenen filmleri arasında yerleşen The Purge filmini dün gece sinemada izledik ve film baya iyiydi.Film bundan önceki 3 bölümle konsepti hemen hemen .Oyuncu kadrosu değişmiş ve senarisi diğerlerinden bağımsız.Film kan vahşet içeriyodu ve sıkılmadan izleyeceğiniz filmdi.İzleyenler büyük ihtimalle bizimle aynı düşüncededir, filmde bazı boşluklar var ki, bu da 5ci filmde dolucak gibi gözüküyor.Film konusu Amerikad 1 gece cinayet işleyerek para kazanıyorsunuz.Bir psikolojik deney ve yaptıklarınız için tutuklanmayacaksınız.Bu yüzden insanlar bir-birine saldırıyo ve katliam başlıyor.Filmde en sevdiğimiz karakter Dimitri.5-ci filmde de aynı oyuncuların yer alıcağı gözüküyor.Her filmde olduğu gibi bu filmde de ana karakterlerimizin başına bir sürü olay geliyor.Filmde kötü karakter yok .Büyük ihtimal onuda 5ci filmde görücez.Filme puanımız 10 üzerinden 7i. İyi seyirler dileriz."

    },
    {
        "id": "011",
        "name": "Primal Fear ",
        "text": "anınmış bir psikoposun öldürülmesi, büyük bir yankı uyandırır. Bu cinayet sırasında olay yerinden kaçmakta olan Aaron, görgü tanıkları tarafından suçlu olarak ilan edilir ve suçu işlediğin neredeyse kesinleşmiştir. Son derece prestijli bir avukat olan Martin Vail, ise olayların bu şekilde geliştiğinden tam olarak değildir ve Aaron'ı savunma görevini üstlenir. Aaron'ın suçluluğu o derece nettir ki Vail'in bu göreve atanması beyhude bir uğraş olarak addedilir. Ancak kısa bir süre sonra davanın seyri tam anlamıyla değişir. Primal Fear, Akademi'de kendisine Yardımcı Erkek Oyuncu adaylığı getiren Edward Norton’ın performansıyla da göz dolduruyor.  Tür ; Dram,Gerilim,Suç  IMDb; 7.7    Bizim filme puanımız ;10"

    },
    {
        "id": "012",
        "name": "Isle Of Dogs",
        "text": "Merhaba arkadaşlar.Uzun zamandır yoktuk.Tatil olmasına rağmen baya yoğun dönemdeyiz.Bize paylaşımlarda yardım etmek isteyen arkadaşlar dm-den iletişime geçe bilir.Gelelim esas konumuzu İsle of dogs.Uzun zamandır bekliyorduk ve bu yılki favori filmlerimizden biri.Filmin animasyon olmasına rağmen izlenilir ve beyenilir.Şahsen biz çok beğendik.Gerek garip şarkıları, gerek dialogları insanın ilgisini çekiyor.Özelliklede seslendirme ekibini tebrik ediyoruz, harika iş başarmışlar.Filmin en çok beğendiğimiz yanı hiç sıkmaması ve akıcı olması.Minik bir spoiler veriyim.Posterde gördüğümüz arkadaşlar filmin ana kahramanları.Filme puanımız 10 üzerinden 9.Eğer ben yetişkinim izlemem böyle animasyonları dersiniz çok şey kayb etmiş olursunuz.Film internete sızdı ama türkçe altyazı olarak yayımlandı.Önümüzdeki günlerde hangi filmin incelemesini isterseniz yorumlarda bildirin iyi seyirler dileriz"

    },
    {
        "id": "013",
        "name": "Dönersen Islık Çal",
        "text": "Beyoğlu'nun arka sokaklarında barmenlik yaparak yaşamını sürdüren bir cüceyle, fahişelik yapan bir travestinin dramatik öyküsü. Toplumun dışladığı bu iki marjinal tipin tanışması karanlık ve pis sokakların birinde gerçekleşir. Cüce (Mevlüt Demiryay), iş çıkışı evine dönerken, sokak serserilerinin saldırdığı ve gerçek bir kadın sandığı travestinin (Fikret Kuşkan) hayatını kurtarır. Gerçekte onu kurtaran, cücenin, o tehlikeli sokaklarda ve gecenin karanlığında kendisini korumak için boynunda taşıdığı düdüktür. Düdük seslerini duyan serseriler kaçıştıktan sonra, travestiyi evine alır. Ne var ki, evinde misafir ettiği 'kadın'ın aslında bir erkek olduğunu anlayınca büyük bir şaşkınlık geçirir. Ama, yaşamını tek başına, yalnızlığını ise balkonundaki köpekleri ve boynundaki düdüğüyle paylaşarak sürdüren cüce ile, başlangıçta iğrendiği, nefret ettiği travestinin arasında duygusal bir dostluk gelişecektir. Bu güzel dostluk ne acıdır ki, o çirkin dünyanın, sonunda onları birbirlerinden ayırana dek sürecektir...    Tür; Dram    İMDb; 7.4    Filmin İsmi; Dönersen Islık Çal"
    }
        ,
    {
        "id": "014",
        "name": "Spotlight",
        "text": "Gerçek bir hikayeden uyarlanan Spotlight, taciz olayıyla gündeme gelen bir kilisenin kendini aklamaya çalışmasını ve bu tacizi aydınlatmaya çalışan Boston Globe gazetesi yazarlarını konu alıyor. Gazetenin yazarlarından oluşan “Spotlight” takımı, Katolik Kilisesi’ndeki taciz iddilarıyla ilgili eski defterleri deşer. Bir senelik araştırmaları sonucunda, Boston’ın üst düzey dini, yasal ve idari birliğine ait on yıllarca gizlenen gerçeklere parmak basılır. Yeni atanan genel yayın yönetmeni Marty Baron 2001 yazında Globe’un başına geçmek üzere Miami’den geldiğinde, ayağının tozuyla Spotlight ekibini, 30 yıl boyunca düzinelerce çocuğa cinsel istismarda bulunmakla suçlanan yerel bir rahip hakkındaki bir makaleyi takip etmekle görevlendirir. Boston’da Katolik Kilisesi’ni hedef almanın çok büyük yankı uyandıracağını bilen Spotlight editörü Walter “Robby” Robinson, muhabirler Sacha Pfeiffer (Rachel McAdams) ve Michael Rezendes ve araştırmacı Matt Carroll davaya daha derinlemesine dalmaya karar verirler. Başrollerini Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, John Slattery, Stanley Tucci, Brian d’Arcy James ve Billy Crudup’ın paylaştığı filmi Tom McCarthy ve Josh Singer kaleme aldı.    Tür; Suç,Dram,Biografi    İMDb; 8.1"
    }
        ,
    {
        "id": "015",
        "name": "The Suicide Theory",
        "text": "Özellikle film müzikleri ile filmseverlerin dikkatini çeken ve film dünyasında fazla ilgi göremeyen kesinlikle puanını haketmediği bir filmi bugün takipçilerimize tavsiye ediyoruz.    İntihara meyilli bir adam, intihar etmesinde ona yardım etmesi için azılı bir katili tutar. Ancak bir sebepten dolayı, hayatına ne zaman kast etse mucizevi bir şekilde kurtulmaktadır.    Tür; Dram"
    }
        , {
        "id": "016",
        "name": "Her",
        "text": "Theodore Twombly hayatını, yakın gelecekte nadir bulunan bir şeye dönüşmüş olan el yazımı mektupları yazarak kazanmaktadır. Ve bu yıllarda insanların işlerini artık bilgisayar programları yerine getirmektedir. Theodore, karısından boşandıktan sonra bir apartman dairesinde tek başına yaşamaya başlar ve bir gün karşılaştığı bir teknoloji reklamıyla birlikte hayatı değişir. Kusursuz bir yapay zeka programı sunan yeni bir işletim sistemi, onu son derece çekici bir kadın olan Samantha ile tanıştırır. Sanal bir varlık olan ve sadece bir sesten ibaret olan Samantha, Theodore'u dünya ve hayat üzerine sorduğu sorularla birlikte bambaşka bir gerçeklikle tanıştırır. Ağır bir depresyonun içerisinde olan Theodore, yavaş yavaş hayatın keyifli yanlarını fark etmeye başlarken yapay zeka programıyla arasındaki ilişki de gitgide tuhaflaşır.    1999'da Being John Malkovich filmiyle Oscar adaylığı kazanan çok yönlü sinemacı Spike Jonzeun son uzun metrajlı filmi, yalnızlık ve yaratıcılık sıkıntısı çeken bir yazarın dram ve komediyle yoğrulan öyküsünü beyazperdeye taşıyor. Filmin başrolünde Joaquin Phoenix yer alırken, Scarlett Johansson da gizemli bilgisayar uygulamasına sesiyle hayat veriyor.    Tür; Dram,Romantik,Bilim Kurgu    İMDb; 8.0"

    }
        , {
        "id": "017",
        "name": "Bumblebee",
        "text": "Selam nasılsınız.Sabah uyandığımızda süpriz bir fragmanla karşılaşdık. @paramountpics sonunda solo bumblebee filminin fragmanını yayınladı.Yıllarca Transformers filmlerini izledik hepside evrenin sonunun geldiğinde otobotlar ve desektikonların savaşı oluyor.Geçen aylarda ekiple bu konu üzerine konuşduk.Neden bir hikaye üzerine gelmiyor.İzleyenler vardır , sevenlerde vardır eski filmleri ama bir yerden sonra baya sıkıyo.Aynı tür 5-6 film.Transformers büyük bir adım atdı.Fragmanda izlediğimiz kadar fazla şahşanlı olmucak.Ve bumblebee üzerine yoğunlaşmışlar.İlginç gözüküyor eski filmlerle kıyasda.Sadece sizleri haberdar etmek istedik iyi seyirler :) . "
    }
        ,
    {
        "id": "018",
        "name": "Memento",
        "text": "Leonard Shelby, pahalı takım elbiseler giyer, son model bir Jaguar kullanır; bunun yanında ucuz, tanınmamış motellerde konaklar ve ödemelerini hep nakit parayla gerçekleştirir. Başarılı bir iş adamı görüntüsündedir... Ancak Leonard'ın tek işi intikam almaktır; karısının ırzına geçip öldüren adamın peşindedir. Şüpheleri polis tarafından dikkate alınmayan Leonard'ın yaşamındaki tek mücadelesi, adalet arayışı uzerine kurulmuştur. Katili belirlemesinde ise büyük bir zorlukla karşı karşıyadır. Leonard'ın nadir görülen, tedavisi olmayan bir hafıza kaybı hastalığı vardır. Kaza oncesi olayları tüm ayrıntılarına kadar hatırlayabilen Leonard, 15 dakika önce ne olduğunu, ne yaptığını, nereye gittiğini ve neden gittiğini bilememektedir.    Tür; Gizem,Suç    İMDb; 8.5    Bizim Puanımız; 9/10"
    }
        , {
        "id": "019",
        "name": "The Sitter",
        "text": "Aylak Noah (Jonah Hill), komşusunun çocuklarına bakıcılık yaparken kız arkadaşından reddedilemeyecek bir teklif alır ve onunla takılmak için çocukları da yanına alarak yola koyulur. Ama bu çapkınlık macerası kontrolden çıkar ve kendisini manyak bir uyuşturucu kralından kaçarken bulur.Izlemeğe film arıyorsanız ve aradığınız film bir komedi filmise mutlaka izlemeniz gerek.Söylemek gerekirse bir adama 10 yıl önce gülüyorsan ve o adam hala da güldürüyorsa bu film sırf Jonah Hill yüzünden izlenir :) Adam gerçekten oyunculuğun hakkını veriyor. Senaryo basit ama siz sadece tebessüm gülmek eğlenmek istiyorsanız mutlaka izlemelisiniz    Bizim komedi tarzı bu filme puanımız 8/10    "
    },
    {
        "id": "020",
        "name": "The Pursuit of Happinnes",
        "text": "Başrolde Will Smithin üstelendiği.Hayatın zorlukların ve bu zorluklardan sadece çok çalışarak ve muhteşem bir azimle yenebilme çabası gösteren kahramanımız İyi bir baba olan Chris Gardner, işinde sorunlar yaşayan, maddi açıdan sarsıntıda olan ve aynı zamanda iyi bir eş olan bir adamdır. Ancak ne yazık ki eşi sıkıntılara daha fazla katlanamayacağına karar vererek onu terk eder. Christopher adındaki oğulları da babasının yanında kalır. Karısının terk edişi de yetmezmiş gibi bir de ev sahibi dışarı atar baba –oğulu. Sokaklarda kalıp, tuvaletlerde, düşkünler evinde çalışarak ayakta durmaya çalışır. Oğlunun sevgisi bu mücadeleci baba için her şeydir. Ve sevgiye eklenen bir var olma savaşı hiç şüphesiz, vakti geldiğinde en mükemmel kapıları açacaktır.    Tür,Dram,Komedi,Biografik    İMDb; 8.0"
    }
        , {
        "id": "021",
        "name": "Hürkuş",
        "text": "I. Dünya Savaşı ve Kurtuluş Savaşı’nda görev yapan, düşman uçağı düşüren ilk Türk pilot olan Vecihi Hürkuş’un hayatı beyaz perdeye aktarılıyor. Henüz 16 yaşındayken uçma sevdasının peşinden giden Vecihi Hürkuş, hayatını uçak üretmeye ve yeni pilotlar eğitmeye adadı.  Türk havacılık tarihinin en önemli isimlerinden pilot ve mühendis Vecihi Hürkuş'un hayatının anlatılacağı filmin yönetmenliğini Kudret Sabancı’nın üstleniyor. Senaryosunu Savaş Korkmaz’ın kaleme aldığı filmin oyuncu kadrosunda Hilmicem İntepe, Gizem Karaca, Miray Daner, Bora Akkaş, Zeyno Eracar, Murat Arkın, Bahadır Yenişehirlioğlu gibi isimler yer alıyor.    Film 2018 yılında vizyona girmiştir.    Tür; Savaş,Biografi"
    }
        ,
    {
        "id": "022",
        "name": "Dersimiz Atatürk",
        "text": "Bu gün sizlere bir tarihi, her kesin izlemesi gereken bir filmi önericez.Filmin ismi Dersimiz Atatürk .Film Atatürkün hayatının büyük ve önemli kısımlarını anlatıyor.Yurtdışı vatandaşı olmamıza rağmen her zaman Atatürke saygı ve hürmet besliyoruz.Ve her zaman Mustafa Kemala karşı bir ilgimiz, bir araştırma isteğimiz oldu.Bu istekle yola çıkıp böyle güzel filmle karşılaşdık.Eminizki Atatürkle ilgili her birinizin bilgisi bizden çok ama yinede bu filmi izlemenizi tavsiye ederiz. Belki kenarda bazı bilgiler var ki, habersizsiniz.Mesela onun hayatı boyunca kaç kitap okuduğu ,hangi evde büyüdüğü.İyi seyirler dileriz "
    },
    {
        "id": "023",
        "name": "Fist Fight",
        "text": "Hiç kimsenin işinden kovulmasına sebep oldunuz mu? Ya da sizin yerinize çalışmaya gelen kişi yüzünden işinizden ayrılmak zorunda kaldınız mı? Tavrınız ne olurdu? Roosevelt High Lisesi’nde yeni eğitim döneminde işten çıkarmalar yaşanacaktır. Kendi durumundan ümitsiz haldeki mütevazi bir İngilizce öğretmeni olan Andy Campbell (Charlie Day) ise kötü bir suçlama ile karşı karşıyadır. Çünkü kendisi gibi bir öğretmen olan Ron Strickland’in (Ice Cube) okuldan kovulmasının sebebi olarak gösterilir. Bu durumu hazmedemeyen Strickland, okulun son günü yumruğunu konuşturacaktır. Okul içerisine giren agresif öğretmen, kendisinden köşe bucak kaçan Andy Campbell’ın peşine düşerek ondan hesabını soracaktır. İkili arasında okul sonrası bir meydan okuma yaşanır.    Tür; Komedi    IMDb; 5.6"
    }
        ,
    {
        "id": "024",
        "name": "Christopher Robin",
        "text": "Dün şampiyonlar liginden dolayı bir post paylaşamadık.Her sabah film gündemine göz atarız.Bu sabah ise karşımıza bizim çocukluk kahramanimiz olan Winnie The Pooh çıktı.Ağustosun 3ünde vizyona girecek olan bu filmi sabırsızlıkla bekliyoruz.Genelde insanlar böyle filmleri çocuklara yönelik olduğunu düşünür.Ama lütfen bu fikirden aklınızdan çıkarın.Coco,Shrek gibi animasyonlar bu düşünceyi değiştirdi zamanında.Şimdi filme dönelim.Kadroda Ewan McGregor,Hayley Atwell gibi isimler yer alıyor.Konusu; bir gün eski arkadaşlar bir biriyle karşılaşır.Pooh ve Robin birlikte maceraya atılır.Neyse iyi seyirler dileriz.Bakalım 2018 de hangi filmler bekliyor bizi. "
    }
        ,
    {
        "id": "025",
        "name": "Fight Club",
        "text": "Brad Pitt, Edward Norton ve Helena Bonham Carter gibi ünlüler size bir şeyi andırıyor mu? Evet 7- den 70-e her kesin izlediği.Kafaları yandıran 1999 yıl yapımı bir film. Şizofrenik olaylar, kavgalar , olaylar . Sözlerle anlatılmaz bir film. Üzerinden 19 yıl geçmesine rağmen hala sevilen hala izlenilen adına toplumlar oluşan bir filmden bahs ediyoruz.Dostlar Fight cluba hoş geldiniz . 32 oskar dalında aday görülmüş 10 u kazanmış.İmdb puanı 8.8 .David Fincher tarafından yönetilmiş, 100 milyon dolar hasılat yapmış ve 2000 yılında film, en iyi ses efektleri dalında Akademi Ödüllerine aday oldu ve 2001 yılının kasım ayında en iyi film müziği dalında Brit ödülünü almıştır.Film o kadar güzel ki , azcık bile spoiler vermek istemiyoruz. Tatilden faydalanarak hemen izlemenizi tavsiye ederiz. İyi seyirler "
    },
    {
        "id": "026",
        "name": "Skyscraper",
        "text": "2018- de vizyona giricek filmlere daha biri ilave edildi.2018in temmuzunun 13 ünde vizyona girecek olan Skyscraper filminden bahs ediyoruz.Baş rölü Dwayne abimiz almış.Klassik hayat kurtarma filmine benziyor.Bol Gerilim ve aksiyon dolu bir film bizi bekliyor.Fragman 2 gün önce yayınlandı.Fragmandan gördüyümüz kadarıyla Rock abimiz eski bir asker ve emekliye ayrılmış.Teroristlerin patlatdığı bir gökdelende ailesi mahsur kalır ve olaylar böyle başlar. İyi seyirler dileriz."
    },
    {
        "id": "027",
        "name": "Deadpool 2",
        "text": "X gon give to ya x gon give to ya diye gelen deadpool abimizin 2 -ci filmiyle karşınızdayız.Deadpool deyince zaten akan sular duruyor,her kese hitap etmesede 7-den 70 e seviliyor.Deadpool 2 -ni bizde sinemalarda izlemek isterdik ama ülkemizde vizyona girmediyini var sayarsak ve internete sızdığı için bir an önce incelemek istedik.Ve ayrıca bir ricam olucak lütfen büyüyümemiz için ve büyüdükçe daha iyi işlere imza atmak için arkadaşlarınızı da film sayfamıza davet edin.Neyse geçelim filme:Deadpool 2 18+ üzeri bir filmdi ve filmin nasıl biteceğini tahmin edemiyorsunuz.İlk film gibi ne duygusal nede fazla komikdi.Espirileri aynı değişmemişti.Kadroda baya genişlenme olmuş.İlk filmle kıyasda bu film daha dolu gözüküyordu.Fakat ana senaryo beni sarmadı yinede deadpool olduğu için izledim ve gayet eğlendim.Filmde bir çok filme göndermeler oldu , ne olduklarını demicem tadını bozmak istemem.Filmi sıkılmadan izliceksiniz hatda nasıl çabuk bitdiğinin farkına varamıcaksınız.Deadpool belkide türünün tek olduğu film.Baş kahramanımız kaltak hıyarın teki ve kendini filmde olduğunu anlayan bir karakter.Ve senariste küfür eden tek karakterimiz.Belkide bu yüzden özgür ruhuyla seçildi ve sevildi.Deadpool 2 İnfinity Wardan iyi olanlarda dicek kötü olanlarda bizim fikrimizce tarzları farklı olduğu için karşılaştırmamız düzgün olmaz.Ama Deadpool 2 bir tık altda kalıyor gibiydi.Yinede seviyoruz seni Dead.3 Filmini bekleriz.İnternet camiası spoilerle dolu ve buda insanlarların hoşuna gitmiyor sonuçta her kes keyifli bir film istemek ister.Bu postumuzu deadpool izlemeyenler için paylaştık.Spoilersiz filmi özet geçmeye çalıştık.Bir an önce filmi izleyin.Her an spoiler yeme tehlikesi var. :) İyi seyirler. "

    },
    {
        "id": "028",
        "name": "Mowgli",
        "text": "Mowgliyi hatırlarsınız .Çeşitli animasyonla filmlerle karşımıza çıktı.Film 2018 19 ekimde vizyona giricek. Film macera ve drama türünde olucak.Konusu bildiğimiz üzere Mowgli ve Şirxanın kapışmasını anlatıyor.Mowgli ve arkadaşlarını görücez.Fil maymunlar kurtlar leopar yılan ve kaplan gibi hayvanları görücez.Mowgli insanlardan uzak hayvanlar arasında büyüyen biri.Eğer kitabını yada animasyonunu en az 1 kere izlediyseniz konusuna değinmeğe gerek yok.Warner Bros. 2 gün önce fragmanı yayınladı.Fragmanı izlemek için youtube üzerinden bula bilirsiniz.İyi seyirler dileriz "

    }
        ,
    {
        "id": "029",
        "name": "The Prestige",
        "text": "Öncelikle selamlar herkese.Yine sizin önerdiğiniz bir film'le karşınızdayız.Filmin ismi Prestij .8.5 imdb puanı var.Ki bu gayet iyi bir gösterici.Filmde Wolverine abimiz yer almakta.En son Logan filminde izlemiştik.Bu filmde onu görmek güzel oldu.Film sihirbazlar çetesine benziyor fakat onun gibi dinamik ve haraketli değil.Film daha dramatik bir film.Açıkcası ben böyle biteceğini düşünmemiştim.Bir an Predestinationu hatırlatıyor size .Gizem dolu bir film olduğu kesin.Görüntüler eski ola bilir yani kalite bakımından düşük gözüküyor yinede gideri var.Film ben düşündüğüm gibi bitmedi benim şahsi puanım 10 üzerinden 7-i.Fazla etkilemedi, özellikle filmin ortası biraz sıkıyor ama konunu anlamanız için filmi tam izlemeniz gerekiyor.Teslayı görmek baya güzel oldu.En çok o sahneni beğendim.Filmde Hugh Jackmandan başka yüzüklerin efendisinden tanıdığımız goblin Andy Serkis,ünlü şarkıcı David Bowie,Scarlett ablamız ve sihirbazlar çetesinde yer alan Michael Caine.Fazla spoiler vermemeye çalıştık.İzlemeyen varsa boş zamanında izlesin iyi seyirler dileriz. "
    }
        ,
    {
        "id": "030",
        "name": "Marvellous",
        "text": "Doğuştan saf bir yanı bulunan Neil Baldwin (Toby Jones), ilerleyen yaşına rağmen evlenmemiş, annesiyle yaşayan bir futbol fanatiğidir. Kendi isteğiyle palyaçoluğu meslek olarak seçmiş ve bir süre sirklerde de çalışmıştır. Ancak onun içi dışı bir hali ve dobra tavrı, sirkteki çalışmasında patronun hoşuna gitmez ve onu kovar.    Mecburen annesinin yaşadığı Stock kasabasına geri dönen Neil, önce Keel üniversitesi kampüsüne, sonra da Stock City takımının yeni teknik direktörü Lou Macari'nin peşine takılır. Onun futbola ilgisi ve esprili tavrı ile takıma yararlı olacağına inanan Macari, formacı olarak Neil'in kulüpte işe başlamasını kabul eder. Neil artık Stock City takımının hem maskotu, hem ayakçısı, hem de gönüllü moral hocasıdır. Gerçek bir hikayeden yola çıkılarak senaryosu hazırlanan film, sırf yılların tecrübeli oyuncusu Toby Jones'ın performansı için bile izlenebilir nitelikte bir yapım.. Tür: Dram    IMDb: 7.9"
    }
        ,
    {
        "id": "031",
        "name": "Batman Ninja",
        "text": "Herkes delicesine Deadpool 2-ni konuşuyor. İnternet camiası spoilerle dolup taşıyor ve insanlar deli gibi film incelemesi yapıyor. Kimse bu dönemde Deadpool'dan başka filmleri takmıyor ve doğal olarak bu yapımlar gölgede kalıyor.Bizim görevimiz ise bu tür filmleri veya animasyonları sizlere sunmaktadır. Bugün sizlere iki tane animasyon filmi önereceğim, ikiside 2018 yapımı ve dc tarafından yapılmış. Dc'nin sinema evreninde filmleri pek başarılı olmasada Marvelle kıyasla tabii ki animasyon filmleri tartışılamaz bir şekilde fark atar. Batman Ninjayı birkaç aydır bekliyordum. Fragmanı izlediğimde çok beğenmiş ve bu iş tutar demiştim. Eski Japon kültürü samurailar, ninjalar, katanalar hep ilgimi çekmiştir. Animasyonu bugün izledim fakat beklentimin altında oldu 10 üzerinden 5-6 arasinda gidip geliyorum. Batman Ninja konsepti iyiydi ama senaryonu tutturamamışlar gibiydi.Şu paralel dünyalarında cıvası çıkmış arkadaş.Artık güzel bir animasyon gelsin.İzleyenler varsa yorumlarda bildirsin ya da izlediğiniz başka animasyonlar varsa önerir misiniz? Fazla konuşurdum fakat spoiler vermek istemiyorum aranizda izlemek isteyenler olabilir."
    }
        ,
    {
        "id": "032",
        "name": "Knowing",
        "text": "Yine değerli izleyicilerimizin önerisi sayesinde izleyip, incelediğimiz filmle karşınızdayız. Filmimizin ismi Kehanet film.2009 yapımı olan filmin imdb puanı 6.2. İlk önce bu film için @b1dkt -ya teşekkür ederiz.Eğer sizde favori filminizi incelememizi istiyorsanız direkt-den bize ulaşın.Neyse konudan çok saptık geçelim filme.Filmin türü : gizem, fantastik, gerilim.Yönetmenliğini Alex Proyas üstlenmiş.Yönetmeni Ben ve Robot , Mısır tanrıları, Dark city gibi filmlerden hatırlarsınız eğer bu filmleri izlediyseniz.Gelelim kadroya : Nicolas Cage abimiz, Rose Byrne , Ben Medhelson gibi ünlü isimler var.Filmin konusu kehanet üzerine, 1959 yılında , bir ilk okulda çocuklara bir ödev verilir.Her biri gelecek hayallerini bir kağıda çizerek , kapsüle koyar ve bu kapsül 50 yıl saklanacakdır.Kapsülde olan kağıtların birinde rakamlar var ve olaylar da burdan başlar.Gerilim ve korku sevenler için tavsiye edilir.Film harikamı yani gideri var ama yinede iyi bir film.Şahsen pek korku filmi izlemediğim için ben sevmem.Puanım adil olursak 10 üzerinden 6 veririz.İzleyici vay canına nasıl filmdi dedirten deil ama genede aranızde beğenenler olur elbette zevkden aslı.İyi seyirler. "
    }
        , {
        "id": "033",
        "name": "Brat",
        "text": "Danilla Petersburg’da yeni bir hayat kurmak için ağabeyinin yanına gider. Ağabeyi gangster ve katildir. Danila da ondan birini öldürmesini isteyerek suç dünyasına adım atar. İşte o zaman yeni hayatı başlamış olur. Yeni insanlarla tanışır, bir kızdan hoşlanır ve rock grubu “Nautilos Pompilius”un hayranı olur. Artık o da katildir. Ona göre, öldürmek yaşamaktan daha kolaydır. Bunu fark edince, yanlış yolda olduğunu anlar. Rus Sinemasının en iyi filmlerinden biri olan Brat filminin 2 ci serisi 2000 yılında izleyicilerine sunulmuştur.yakın zamanda brat 2 de takipçilerimize sunacağız. P.S: Brat filminin başröl oyuncusu Danilla karakteriyle seyircilerin büyük saygı ve sevgisini kazanmış sergei sergeevich bodrov 20 eylül 2002'de Brat 3 filminin çekimleri sırasında çığ düşmesi sonucu hayatını kaybetmiştir.    Tür; Suç,Dram    İMDb;8.0    Filmin İsmi;Brother"
    },
    {
        "id": "034",
        "name": "K-Pax",
        "text": "Sənə bir şey deməliyəm Mark... Hələ bilmədiyin bir şey. Ama biz K-Paxlilər bunu kəşfedəcək qədər uzun müddətdirki yaşıyırıq. Kainat genişlənəcək. Və sonra təkrar içinə çökəcək. Sonra təkrar genişləyəcək... Bu prosesi sonsuza dək təkrarlayacaq. Ama bilmədiyin bir şey var kainat təkrar genişləndiyində hərşey indiki kimi olacaq.Bu aralar nə səhv etsən növbəti geçişdə o səhvi təkrar yaşayacaqsan.Etdiyin hər səhvi yenidən yaşayacaqsan. Təkrar və təkrar... Sonsuza dək... Sənə tövsiyəm bu səfər düz olanı etməyindi. Çünki bu an, əlindəki tək şeydi."
    },
    {
        "id": "035",
        "name": "The Shape of Water",
        "text": "Bu günkü filmimizin ismi Suyun Sesi (Shape of Water).Değerli izleyicimizin önerisi sayesinde bu filmi izledik.Bu filmi Deniz Canavarı ve Dilsiz Kadının aşkı olarakta adlandıra biliriz.Guillermo Del Toro'yu Hellboy ve Blade2 -den tanırız.Meksikalı yönetmen bir çok başarılı sinema filmleri yaptı ve bu o filmlerden biri.Shape of Water kendinde aşkı, dramayı ve umutu barındırıyor.Yönetmen belkide insanlara bir mesajı iletmek istemiştir.Karşındakının dini,ırkı,görünüşü fark etmez önemli olan ön yargısız davranarak önündekini tanımak , onunla bir bağ kurmak.Evet film bir yerden sonra haraketleniyor buda ona konusundan dolayıdır.Film düşük bütçe olsa bile çok iyi olmuş.Toro'ya teşekkürlerimizi bildiririz.Günün birinde dev bir balıkla dilsiz bir kadının aşk öyküsünü yüzümüzde büyük bir tebessümle izleyeceğimiz kimin aklına gelirdi.Filmin konusuna pek değinmedik, sebebi bu güzel yapımın güzelliğini tadını bozmamak.İyi seyirler dileriz. "
    }
        ,
    {
        "id": "036",
        "name": "Infinity War",
        "text": "Efenime söyliyeyim az önce internete sızan İnfinity Warı izledim.Şimdi buna nasıl spoiler vermeden konuşalım diye düşünüyorum.Bundan bir kaç gün önce Black pantheri izlemiştim ve pekde çoşturucu gelmemişti ve beklentimin 1 tık aşağısındaydı.İnfinity Warı spoiler alarak izlememe rağmen yine bir heyecan vardı.Film efsane güzel değildi ama şimdiye kadar en acımasız marvel filmiydi diye bilirim.İzleyenler almıştır ne dediğimi izlemeyenler muhakkak izlemeli. İmdb sine baktım 9.2/10 baya yüksek fakat bu kadar puanı kabul edermi bence etmez. Sebebini söyliyeyim bundan daha iyi filmler var.Senari olarak.Sadece avengersin hayran kitlesi büyük.Mesela tanınmamış bir kahraman topluğu olsaydı mesela the defenders gibi fazla ilgi çekmezdi.İronman, Captain America,Spiderman ve başkaları her birinin kendi hayran kitlesi olduğu için bu kadar beğenildi ve beklendi.Marveli tebrik ederiz iyi bir işe imza atdı.Şimdi nolucak bizde bilmiyoruz Avengers 4 filmini beklemeliyiz. Bizim puanımız 8/10.Filmi her kes izledikden sonra bol bol konuşuruz şimdilik sizin düşünceleriniz nelerdir yorumlarda bildirin"
    }
        ,
    {
        "id": "037",
        "name": "The Black Panther",
        "text": "Ne demiş T'Challa abimiz: I am the king of Wakanda. My name is T'Challa. Black Panther filmini az önce kötü bir kaliteyle izledik. Marvel yine yeni bir ortam kurmayı başarmış. Asgard gibi Wakanda da var olmayan yerler var ve Marvel bu var olmayan yerleri öyle bir hale getirerek seyirciye sunuyor ki seyirci bir an bile olsa varlığından şüphe etmiyor. Geçelim kötü karakterimize. Marvelde nihayet Dünya'ya hükmetmek niyetinde olmayan kötü karakter geldi ve kendince haklı sebebleri yüzünden Wakanda'nın kralıyla savaşa girer. Black Pantherle ilgili genel konuşmak gerekirse iyiydi. Yapımcılar Afrika medeniyetini, dansını, tabiatını, geleneklerini kolayca ve güzel bir şekilde seyirciye aktarabilmiş fakat bize göre senaryo basitti. Bazı gereksiz sahneler vardı ama oyuncuların performansı bunu pekte belli etmiyordu. Micheal B. Jordan, Chadwick Boseman, Forest, Danial Kaluuya gibi isimlerin olduğu film nasıl kötü olabilir ki. Filmin kadrosunun genişliğini sabaha kadar saysak bitiremeyiz. Şaka şaka bitirebiliriz ama o zaman sıkıcı olur. Filme geri dönelim. Genel olarak puan vermek gerekirse sırf Wakandan'ın kralı için 8 puan yapar ama gereksiz sahneler olmasa daha iyi olabilirdi. Kim bilir belkide Black Panther 2 de bu sorunu göze alırlar ve ortaya harika bir iş çıkarırlar. Filmde efektler çocukların bile farkedebileceği bir şekilde işlenmişti. Filmin sonunda after credits sahnesi var onu muhakkak izleyin diyeceğiz ama tam verilmemiş yarıda bitiyor. Filmin gidişatıyla ilgili şunu söyleyebiliriz ki çocuksuydu. Yani neler olacağını önceden tahmin edebiliyordun ama yine de izlemeye değerdi. Eğer izlemek isterseniz direkt iletişime geçin link atalım. İyi seyirler dilerim. "

    }
        ,
    {
        "id": "038",
        "name": "Miss Peregrine's Pecuilar children",
        "text": "Bu gün 2011 yılında çıkan romandan uyarlanmış filmi konu alıyoruz.Filmin ismi Bayan Peregrine'in Tuhaf Çocukları.Konusu 16 yaşında olan Jacob Portman kendini gizemli bir adada ve 70 yıl öncesinde bulur. Burada kendisi gibi tuhaf ama gizemli güçlerle donanmış olan öksüzlerle karşılaşır. Bu çocuklar, Bayan Peregrine'in koruması altındadır. Fakat bu çocukların peşlerinde korkunç yaratıklar vardır ve Jacob da çok geç öğrendiği tuhaflığıyla onları korumaya çalışacaktır.Film 3 boyutlu fantastik macera türünde.Eva Green,Asa Butterfield    gibi isimler filmin oyuncu kadrosunda yer almakta.Yönetmen koltuğunda ise Tim Burton kapmış.Puanımız 10 üzerinden 6.Effektler baya iyiydi ve izlerken sıkılmıyorduk,fakat daha çok çocuklara yönelik bir film olduğunu düşünüyoruz.Ama bizimle aynı fikirde olmayanlarda ola bilir.Eğer izlemediyseniz izlemenizi ,izlediyseniz yorumlarınızı bizimle paylaşmayı unutmayın. "
    },
    {
        "id": "039",
        "name": "Step up",
        "text": "Hadi biraz geçmişe gidelim.Yaklaşık 10 yıl önceye.Step up -ı hatırladınızmı, her kesin bir zamanlar izleyipte dansla ilgilendiği dönemler.Step up zamanında farklı ve ilkti kendi türünde,sokak sanatıyle yakından bilgi ediniyordunuz.Fakat 2,3,4 cü bölümler geldikden sonra baya sıkıcı olmaya başladı.Yapimcilar aynı senarini 4 bölüme bölmek yerine 2 bölümlük farklı ülkelerin milli danslarını yapsaydılar daha iyi olurdu.Yinede step up-ın hatırası başka ve bir çok kişiye umut,motive verdi dans konusunda.Gelelim filmin hasılatı ve bu gibi konular.Film 12 milyon bütceye sahip.2006-cı yılda vizyona girdi ve baya seyirci topladı.İmdb puanı 6.5.Filmde Channing Tatum gibi ünlü isimler yer almakta bizim puanımız ilk bölüme 10 üzerinden 7-İ.Eğer izlediyseniz yorumlarıınızı bizimle bölüşmeyi unutmayın iyi seyirler. "

    }
        ,
    {
        "id": "040",
        "name": "Coco",
        "text": "Pixar yine yapmış.. Bir çoğumuz maalesef animasyon filmlerinin çocuklara ait olduğunu düşünerek,bir çok yapımdan habersiz kalıyoruz ve izleyemiyoruz. Pixar ve Walt Disney'in bugün ortak yapısı olan Coco'yu konu alıyoruz .Pixar,2016 yılında animasyonu geliştirmeye başlamış ve 2017'de film vizyona girmiş.Müzikle ilgisi olan filmimiz Meksika'da geçiyor. 175-200 milyon dolarlık bir maliyetle dokuz basamaklı bir bütçeye sahip ve oyuncu kadrosu tamamını Latinlerden oluşan ilk filmdir. Yaklaşık 105 dakikalık film $554.2 milyon hasılat yapmış. Aile baskısı yüzünden, müzikle ilgilenemeyen arkadaşımız Miguel'in başından geçen olay anlatılıyor ve izlerken Meksika kültürünü ve Milli Gelenekler hakkında bilgi sahibi oluyorsunuz. Türlü türlü olarlar başına gelen Miguel arkadaşımızı çok seveceksiniz.. O aile sıcaklığını,kan bağını siz de hissedeceksiniz. Bizim puanımız on üzerinden sekiz.Siz izlediyseniz ne düşünüyorsunuz? Yorumlarda fikirlerinizi bizimle paylaşın.. İzlemediyseniz 7'den 70'e her yaşın izleyeceği iyi bir film karşınızda.. İyi seyirler."
    },
    {
        "id": "041",
        "name": "Dolu",
        "text": "Azerbaycan film sektöründe pek de başarılı filmlerin olmadığını bizde biliyoruz.Fakat bu filmler arasında başarılı ve pek bilinmeyen filmler var,Dolu filmide bunlara bir örnek.Film 2012 -ci yılda vizyona girmiş ve Aqil Abbasın  Karabağ savaşı isimli kitabından esinlenmiştir.Savaşın içli dışlı gerçeklerini gayet iyi göstermiş.Son damla kanına kadar savaşan askerlerin kahramanların acı dolu anları,arkadaşlarını kayb etmeleri gayet iyi seyirciye aktarılmıştır. Tabi bu filmi Hollywood yapsa kesin izledirdiniz ama büyük bir ihtimal çoğunun haberi yok, o yüzden izleyin ve gerçekleri sizde görün.İzlemeyi tavsiye ettiğimiz filmdir. Puanımız 8.İyi seyirler dileriz"
    }
        ,
    {
        "id": "042",
        "name": "Maze Runner The Death Cure",
        "text": "Eveeet sonunda sınavlar bitdi.Biz geri döndük nasılsınız iyimisiniz inşallah? Bu gün malesef incelemesi ertelenen 3 bölümlük film serisinin sonuncusunu incelicez.The Maze Runner ilki çok iyiydi ve baya bir kitle toplamışdı kendisine,2'ciside fena değildi ama 3'ücüsü biraz çok dandikti.Baya sevmedik hatta bir biz miyiz bilmiyoruz ama şu teresaya gıcık olduk ,öldürün yaa şu kızı.Şimdi şuraya bişey yazarsak spoiler vermiş olucaz malesef.Gelelim film genel konuşalım film sadece para hilesi bence 2 bölümlük olsaydı daha iyi olurdu.Konusuna değinmemizi yani spoiler isterseniz yorumlarda bildirin. Filme puanımız 4 gerçekten böyle dandik olucağını beklemiyorduk.Aşırı animasyon kullanılmıştı ve zombilere bu bölümde daha az yer verilmişti.Olayların gidişi beklediğimiz gibi gelmiyordu ve birisi şu Teresa denilen kızı öldürmüyordu.Sonu ama güzeldi ipucu vermeyelim şimdi spoiler sayılır.Oyuncular aynı kadroydu.Film baya haraketliydi ara sıra dialoglar vardı.Öyle işte yine bir grup 19-20 yaşlarında 5-6 tane erkek dünyayı kurtarıyor 3 filmde aynı senaryo üzerinden gidince baya sıkılıyor seyirci.Umarız bunu yönetmenler görür de bir daha böyle şey yapmaz."
    },
    {
        "id": "043",
        "name": "Downsizing",
        "text": "Minikleşmek için hazırmısın? Düşünsenizde minik bir arkadaşınız oluyor bu dünyadan deil kendisi ilginç olur dimi? @downsizingfilm gerçekten konusuyla çekim tarzıyla ilginç bir film fragmanı izledik filmi henüz izlemek kısmet olmadı eğer izlerseniz fikirlerinizi bizimle bölüşün. ."
    },
    {
        "id": "044",
        "name": "Irreplaceable you",
        "text": "Çıkmaz sokağamı girdiniz? Hiç umudunuz yokmu.Belkide umudu kendiniz yaratmalısınız.En zor durumda bile hala bir cözüm yolu vardır.Günümüzde insanlar sorunlar problemler stress düşünce ile mücadele ediyor.Ki bu da onları moral bozukluğu yaratıyor.Motive olunmak için ailece izleye bileceğiniz duygusal ve motive edici bu filmi izlemenizi tavsiye ederiz. ."
    },
    {
        "id": "045",
        "name": "Kong Skull Island",
        "text": "Evet çocukluğumuzdan beri çeşitli yıllarda çeşitli senarili King Kong filmleri izledik.Her birinin konusu ise 1 bölümden ibaret olurdu.İnsanlar adayı bulur King Kongu görür ve yakalamak ister falan filan.Tüm filmlerde insan evrene hükm etme imkanını yaratır.Fakat bu sefer bokunu çıkardılar diye biliriz.Filmin efektleri iyiydi her zamanki gibi.Ama bu sefer işe Godzillada giriyor.Bir seri haline gelicek olan bu filmi kahraman filmleri gibi olucak.Filmin son sahnesinde bunu göre biliriz.Malesef tvde bir çok sahneleri kestikleri için yeniden internetde izleme mecburiyetindeyiz.Film diğerlerine baktığımızda iyiydi. Ayrıca filmin kadrosunda @loki_laufeysonn de yer almakta.İyi seyirler dilerim."
    }
        , {
        "id": "046",
        "name": "Insaisissable",
        "text": "Merhaba arkadaşlar bu gün sizlere 2013 yapımı olan sihirbazlar filmiyle karşınızdayız.İzleyeli uzun zaman oldu eh şuanda da pek film izlemiyoruz diye boş koymayalım dedik.Türü gelirim ve Polisiye.Film 2 bölümden ibaret . Ve kendi türünde ilk sanırsam ve bu yüzden insanlar çok sevdi.Evet insanlar illüzyon gösterilerini severler bu film haline geldikde ise ortaya muazzam bir iş çıkar. Gelelim konusuna Atlas isimli son derece karizmatik ve etkileyici bir illüzyonistin liderliğini yaptığı, dünyanın en iyi sihirbazlarından oluşan 'Four Horsemen' ekibinin başından geçenleri konu alıyor. Kabarık kadrosu filme ayrı bir ilgi katıyor.Bizim puanımız 6 bu filme.Sizin düşünceleriniz nelerdir? "
    }
        ,
    {
        "id": "047",
        "name": "Call me by your name",
        "text": "Kendini olduğu gibi kabul etmiş Elionun hafif akli başında olmayan Olivera aşkını anlatiyor temelde. Mükemmel manzaralarin eşlik ettiği bu film bende mutluluk hissini uyandırdı. İstemsizce hayran oldum o görüntülere. Filme gelirseek, Elio o kadar masum ve sevecendi ki Oliverı karşıma alıp kendine gelmesi için sarsmak istedim filmi izlerken. Konusuysa oldukca dingin ve basit aslinda. Bu Elio'nun babası bi profesör ve yazları yanina staj eğitimi ,sanırsam, icin yanına öğrenci alıyor.Bu öğrencimiz de Oliver. Bu sekilde karakterlerimizin yollari kesisiyor. Sonu beklenmedik olan bu film yorgun bir günün ardından papatya çayı hissiyatı uyandıracaktır sizlere. En iyi uyarlama senaryo oscarini da kessinlikle hak etmiş. Şiddetle tavsiye ederim! ."
    }
        , {
        "id": "048",
        "name": "Şahsiyyet",
        "text": "Evet gelelim bu gün önerdiğimiz diziye.ilk 3 bölüm dün yayınlandı. @puhutv den izleye bilirsiniz @sahsiyetdizi si konusu polisiye detektif üzerine olan bir dizi.İnternet dizisi ve tv dizileri gibi haftada bir bölüm izlemek mecburiyeti bırakmıyor.Yine @ayyapim güzel bir işe imza atmış.Bize göre dizi ne kadar kısa ve net olursa o kadar iyi olur ve seyirci beğenir.Sanırsam @sahsiyetdizi de kısa olucağını düşünüyoruz.Konu baya iyi işlenmiş.Ev ,dekorasyon , müzikler hatda arabalar bile insanı 70-80ci yıllara götürüyor.Spoiler vermek istemeyiz.Ama fragmandanda göründüğü gibi Agah beyin aklında kurduğu plan üzerine.Amerikda bu veya benzer diziler olsada Türkiyede türünün tek örneğinden.Karanlık anlamsız yerler ola bilir ama çekim oyuncular harika.Bizim puanımız türk dizileri arasında 9.Şimdi size bir soru ya siz dünü hatırlamasaydınız napardınız? "
    },
    {
        "id": "049",
        "name": "End of the fuking world ",
        "text": "Geçtiğimiz günlerde yazdığımız blogları okuduğumuzda fark etdik ki, baya bayat kalmış filmin veya dizinin konusuna deyinmeden sadece muhteşemliğini anlatmışız.Şimdi o filmleri ve dizileri uzun uzun inceliyelim.Bu dönem sayfayla pek ilgilenemiyoruz doğal olarakda izleyicilerimizin sayı azalıyor.Geçtiğimiz günlerde @teotfw dizisini bitirdik.Dizi 8 bölümlük ve 160 dakika sürüyor hepsi.Gerçekten müzikleri çok güzeldi ve baya beğendik.Konusu 2 gencin hayatdan sıkıldığını ve yanlışlıkla başlarını belaya soktuklarını anlatıyor.Kısa olduğu için hep bir haraket içinde oluyor.Evet eğer hata veya anlamsız noktalar arıyosanız baya var ama bu diziye pek tesiri yok.Genclerin hep yapmak isteyibde yapamadıklarının harika anımsatmışlar.Ve dizide eşcinselliğe de yer ayırmışlar.Amerikanın o küçük mahellelerini de görüyoruz.Ümumen puanımız 8 oldu.Aslında spoilerli yazıcaktık bazılarınız izlemediğini var sayarsak yazmıyoruz iyi seyirler dileriz .Ve sonda gençlere tavsiyemiz yapmak isteyibde yapamadıklarınızı bir an önce yapın"
    },
    {
        "id": "050",
        "name": "La Vache",
        "text": "La Vache.Çoğu kişi bilmez bu filmi.Fransız yapımı olan gerçekten eğlenceli zamanlar yaşatan bol esprili ve maceralı bir filmle karşınızdayız.Filmin konusu bir Cezayir de 🇩🇿 yaşayan Fatahla ineği Jacqueline ile birlikte Marsilyaya yola koyulurlar.İmdb puanı 6.8 .Bizim puanımız 7.İyi seyirler. ."
    }
        ,
    {
        "id": "051",
        "name": "hobbit",
        "text": "Beklenmedik yolculuğa hazırmısınız? Haydi bizimle birlikte gelin.Yüzüklerin efendisi filmini hatırlarsınız.İşte hobbit o serinin devamı.Konu olarak geçmişte baş veren olayları hatırlatıyor.Her yeni yılbaşı sabaha kadar izleriz.İster hobbit isterse yüzüklerin efendisi çocukluğumuzun kahramanları.Film 3 bölümden ibaret.Ve konusu bir hobbin başına gelen olayları anlatıyor.Beklenmedik bir ziyaret sonucu eski arkadaşı Gandalf gelmesinin ardından kendini 13 tane cüce arasında bulu verir.Erebor'un kayıp Cüce kralığını geri almak içi n çıktıkları bu yolculukta goblinler,orklar,elflerle uğraşıcaklar. Şimdi biraz yoğun dönemdeyiz pek aktif olamıyoruz fakat her gün bir film önerisi yapmaya çalışıcaz iyi seyirler . "

    },
    {
        "id": "052",
        "name": "la casa de papel",
        "text": "Ispanyol dizilerini önceden izlemişliğimiz yok fakat netflix yapımı ispanyolca olan bu dizi bir efsane.Dizinin konusu gelmiş geçmiş en büyük baskın.Harika ekip toplayan profesör 100 yılın soygununu yapıyor.Çeşitli karakterler bolca ters köşe göreceğiniz bu dizi şuan da reytingleri altüst etti. eğer izlemediyseniz ,izlemeye hemen başlayın. ."
    },
    {
        "id": "053",
        "name": "gorunen adam",
        "text": "hepinizin severek izlediği vartolu karaterini canlandıran kişinin bir internet dizisinde oynadığını biliyormuydunuz.Gerçekten severek izlediğim bu diziyi sizede tavsiye ederim"

    },
    {
        "id": "054",
        "name": "dobry rok",
        "text": "A good year.Londra'da çalışan bir iş adamının amcasında miras kalan üzüm 🍇 bağını satmak için yola koyulur.Fakat sandığı kadar kolay olamaz.Başına türlü dertler gelmesine rağmen ömrünün en güzel günlerini orda geçirir.Hikayesi kitapdan uyarlanmış bu yapım çok sevdiğimiz bir film.Espriler ,komikler olaylar, italya kültürünü göre bileceğiniz bir film sizi bekliyor ."
    },

    {
        "id": "055",
        "name": "batman vs superman",
        "text": "Batman vs Superman filmini önceden izlemişliğimiz var.Büyük ihtimal sayfanın hemen hemen tüm izleyicileri izlemiş olmalı.Filmi justice leaguele kıyasda daha karanlık olduğunu fark ediyoruz.Filmin kötü adamı iyi işlenmemişti ve tesadüfler çok fazlaydı.Batman Justice leaguele kıyasda iyiydi .Ana karakteri bu kadar ezmemeliydiler filmde.Onun dışında Wonder Womanı görmek hoş oldu zaten bu filmden sonra solo filmi vizyona girdi.Bizim puanımız 6. "
    },

    {
        "id": "056",
        "name": "civil war",
        "text": "Evet yine bir avengers filmiyle karşı karşıyayız.Black Panther ve spidermani ilk defa bu filmde gördük.Antmanında takıma katılması gerçekten iyi olmuş.Konusu iç savaşı anlatıyordu.Captan vs İronman hala bu tartışmalar gidiyor.2sininde kendine göre sebepleri var Bucky sonuçta Toninin.... 😄 spoiler vermiyelim.Film iyiydi fakat Dc -de konuyu aynı işlemiş.Son dönemler neden Dc ve Marvel aynı konseptde gidiyor.Ama Marvel daha başarılı bu konuda.Civil wara puanımız 8di.Effetkler yeni karakterleri görmek iyiydi ayrıca her marvel filminden farklı olarak bu sefer insanlık tarihinin sonu gelmiyordu. "
    },

    {
        "id": "057",
        "name": "sherlock holmes",
        "text": "Merhaba Filmden Önce izleyicileri. Konu Sherlock olunca bizde boş durmadık kolları sıvadık.Bildiğiniz gibi artık bir seri haline geldi. Sherlock Holmes ilk 2 filmi çok başarılı ve seviler oldu.Şöyleki 2 film toplamda 500 milyon dolardan fazla gelir getirdi.Konularını genelde Arthur Conan Doylenin eserlerinden götürülmüş.Gelelim 3ü filme.Bilyorsunuz şuanki durumda @robertdowneyjr marvelin yaptığı infinity war çekimlerindeydi.ve sevgili arkadaşı doctor watson sanırım rölü bıraktı.Film 2018 gelmesi bekleniyordu.Fakat bizim fikrimizce 2018 de çekimler başlıcak.Bunun @robert.honey.jr meşkul olmasından dolayı düşünüyoruz.Ve sherlock holmesin sesimizi duymasi icin #wewantsherlockholmes3 adli hestegi kullanin "
    },

    {
        "id": "058",
        "name": "inside man",
        "text": "Hücrede yatan bir adam, planladığı kusursuz banka soygununu anlatarak, izleyiciyi bu soygunu seyretmeye davet eder. Olaylar zincirinin en başında her şey aslında herhangi bir hırsızlık gibi başlar. Hal böyle olunca boyacı kılığındaki soyguncular, elli kişiyi rehin aldığında polis de gerekenleri yapar. İki dedektifi bu adamlarla anlaşmak üzere görevlendirir. Ne yazık ki olaylar ilerledikçe bu dedektifler, hırsızların gerisinde kalırlar. Hızla tüm çareler tükenmeye başlar. Ortada öyle tuhaf olaylar gelişmektedir ki hırsızların esas amacının sadece bankayı soymak olmayabileceğine dair şüpheler oluşmaya başlar."
    },

    {
        "id": "059",
        "name": "named bob",
        "text": "Öncelikle Selam her kese.Filmden Önce ekibinin yaptığı yeni konseptle her kesden öneri filmler alıcaz.Ola bilir bu filmler arasında beğendiklerimizde olsun beğenmediklerimizde.Yinede amacımız size hizmet etmek ve sizi mutlu etmek.Evet,gelelim ilk filmimize .Filmin ismi Sokak kedisi Bob.Öncelikle filmin başarılarından,oyuncu kadrosundan falan konuşalım.İmdb puanı 7.4.Film gerçek hayatdan uyarlanma bir film. Yönetmenliğini Roger Spottiswoode üstlenmiş.Filmin süresi yaklaşık 1 saat 43 dakika.Filmde röl alan oyuncular Luke Treadaway, Ruta Gedmintas, Joanne Froggatt.Türü Komedi,biyografik,dram.Evet gelelim şimdi bizim görüşlerimize ve filme.İlke önce onu demek gerekirse böyle doğal filmleri sevdiğimizi bilirsiniz.Hachiko,Jungle,İnto the wild bu gibi filmler .Gerçi bu film Hachikoya çok benzesede özenilmemiş ve her ikisinin kendi konuları var.Kitabını malesef okumadık,ama gerçekten okumak isteriz.Film çok iyiydi ve 2018de izlediğimiz en iyi filmler arasındaydı.Filmin konusu uyuşturucu bağımlısı birinin bir kediyle şans eseri karşılaşması ve aralarında yaranan baği anlatmışlar.Gerçekten müzikleri ortami çok iyi işlenmiş ve fazla para harcanmadan ortaya harika bir film çıkmış.Başlarda filmin konusundan haberimiz yoktu ve izlerken bir anlık garfieldi hatırlatdı ve acaba 😃 bu kedide mi konuşuyor diye bir fikir vardı aklımızda.Filme puanımız 10.Eğer izlemediyseniz şimdi hemen izlemeye başlayın. @ilkenury gerçekten teşekkürler yine bu tarz film önerilerini bekleriz"
    },

    {
        "id": "060",
        "name": "prisoners",
        "text": "Maccachusetts eyaletinin Brockton bölgesinde, Şükran Günü'nü kutlamak için bir araya gelen Dovers ve Birches aileleri her şeyin yolunda gittiği bu yemek esnasında korkunç bir haberle altüst olurlar. Gecenin ilerleyen saatlerinde ailelerin iki küçük kızlarının kaybolması sonrasında panik dolu anlar yaşanır. Saatler ilerler, ancak kızlar halen daha ortada yoktur ve durum kaçırılmış oldukları gerçeğini kuvvetlendirir. Polise başvursalar da hızlı ve nitelikli bir sonuç alamazlar. Keller Dover ise bir hayli panik içerisindedir ve polisin çabalarını yetersiz bulup adaleti kendi elleriyle aramaya karar verir. Genç ve başarılı dedektif Loki'den de yardım isteyen genç adam, kendini suçlu ve masumun birbirine karıştığı oldukça şaibeli bir davanın içerisinde bulur. 2010 yılında çektiği İçimdeki Yangın (Incendies) adlı filmle tanıdığımız Denis Villeneuve'ün yönetmenliğini yaptığı filmin senaryosu, sinemaya Contraband filmiyle sinemaya giriş yapan Aaron Guzikowski'nin imzasını taşıyor. Filmin başrollerinde ise son dönemin başarılı oyuncularından Hugh Jackman ve Jake Gyllenhaal'ı izliyoruz."
    },

    {
        "id": "061",
        "name": "shrek",
        "text": "Çizgi Filmin ismi -ShrekVizyona giriş tarihi -2001İmdb puanı - 7.9Hasılatı - $ 484 409 218Yönetmen-Andrew Adamson,Vicky JensonOyuncular - Mike Myers,Eddie Murphy ve sayre ...Vakit - 1 saat 29 dakikaTürü-Animasyon,Komedi,FantastikAnimasyon filmleri bir çok kişi için çocukca gele bilir veya yalnız çocukların izlemesi gerektiğini düşüne bilirler,fakat biz bu fikre katılmıyoruz.Bazı müzikler, filmler,eşyalar,animasyonlar bile bizim çocukluğumuzu hatırlatır.İşte Şrekde bu tür bir animasyondu.Çocukluğumuzda haftada en az 2 defa izlerdik.Gerek müzikleri gerek te esprileri kendine bağlıyoru. Gerçi şarkıları söyleyemesek veya anlamasak bile her zaman söylemeye çalışırdık.Şrek bizim için animasyon filmlerinin en başında.Şreke puanımız 10. Bir çoğumuz izlemiş olabiliriz.Fakat yeniden izlemeye değer.Eşşek Fiona Şrek efsane bir kadro.İyi seyirler "
    },

    {
        "id": "062",
        "name": "the legend of 1900",
        "text": "Filmin ismi -1900 efsanesi Vizyona giriş tarihi -1998İmdb puanı - 8.1Hasılatı - 259,127 $Yönetmen-Guiseppe TornatoreOyuncular - Tim Roth ,Pruit Taylor Vince ve sayre ...Vakit - 2 saat 35 dakikaTürü-Dram,MüzikHayatı boyu gemide çalışan Danny Bodman bir gece kimliği belirsiz biri tarafından bırakılmış bir kutu bulur ve kutunun içinde bir çocuk olur.Ve 1900 efsanesi böyle başlar .Fazla spoiler veribde tadını kaçırmak istemediğimiz için filmin konusuyla ilgili konuşmayı istemiyoruz.Genel olarak konuşmak gerekirse hayatını gemide geçirmiş bir pianoçunun hikayesi.Film güzeldi.Ve bir bakıma bize piyanist filmini hatırlatdı.Şimdi diceksiniz neden her filmi başka filme benzetiyorsunuz.Ama konu olarak daha yavaş ve haraketsiz bir filmdi.Aslında pek tarzımız değil.Fakat iyi bir film.Filme puanımız 8 . Filmi izlemediyseniz muhakkak izleyin. @ofaruk75 önerdiğiniz için teşekkürler.Sizde sevdiğiniz filmlerin incelemesini istiyorsanız bizimle iletişime geçin ve arkadaşlarınızı davet etmeyi unutmayın. "
    },

    {
        "id": "063",
        "name": "dugun dernek 2",
        "text": "Türkiye sinema sektörünün düşüşünü izliyoruz şuan.Youtuberlerin film yapması bir fırtına gibi başladı ve halada artmakta.Biz youtuberlerin film yapmasıma karşı değiliz kötü film yapmasına karşıyız.Yaptıkları filmlerde ortada .Bu işi iyi yapanlar var zaten , bırakın onlar yapsın.Bizimde rölümüzü bu iyi filmleri size takdim etmek.Bu gün konuşacağımız filmin ismi Düğün Dernek 2.İzlerken gerçekten eğlendiğiniz komedini kahkahayı küfürle deil yerinde ve güze esprilerle, sözlerle size takdim eden bir film.Kadroya gelirsek : Ahmet Kural, Murat Cemcir,Rasim Öztekin ve sayre ve sayre bu liste uzarda gider .Filmin yönetmenliği ilk filmde olduğu gibi Selçuk Aydemir.Ahmet Kuralın tüm dizi ve filmlerinin yönetmenliğini yapan genç ve başarılı bir yönetmen.Eğer ilk filmi izlemediyseniz onuda muhakkak izleyin.Konusuna gelirsek İlk filmde oğlunun düğününü yapan İsmail bu kez torununun sünnet düğünü için kolları sıvarken ekip tekrar bir araya gelir ve işler iyice karışır! Eski takım bir araya geliyor, başını olmadık belalara sokuyor, sünnet düğünü şehir çapında bir hadise halini alıyor. İmdb puanı 6.6. Fakat bizim puanımız 8.Eğer ailecek bir komedi filmi arıyorsanız bu filmi izleyin. İyi seyirler ."
    },

    {
        "id": "064",
        "name": "baby driver",
        "text": "Yine değerli izleyicilerimizden birinin önerisiyle izlediğimiz filmle karşınızdayız.Baby Driver filmi fragmanını ilk izlediğimde bir anlık bile olsa Taxi filmini hatırlattıyor.Film 2017 -ci ilde vizyona girmiş ve yönetmenliğini 90-ların ortasında çektiği kısa filmlerle anımsanan Edgar Wright yer alıyor.Baş rölde ise Aynı yıldızın altında filminden tanıdık bir isim var .Evet bildiniz Ansel Elgort.Türü Aksiyon,Polisiye ve Komedi.Özelliklede filmi izlerken seçilen oldschool müzikleri dikkatimizi çekti.Gerçekten iyi seçilmiş müziklerdi ve bizde beğendik.Taxi filmini anımsatıyor demişdik ya evet anımsatıyor faka ana karakterimiz bu sefer kötü adamlara şöförlük yapıyor.Baby karakteri, Atlanta kentinde soygundan soyguna koşan değişken hırsızlık ‘ekiplerinin’ daimi şoförü olarak direksiyona geçmektedir. Ve karaterimizin başı bir türlü beladan kurtulmuyor.Filmin konusu böyle gidiyor.Başka birşey yok .Filmin imdb puanı 7.7 .Günümüzde Amerikan filmlerinin bir çoğunun süper kahraman konusu üzerine çekildiğini biliyorsunuz.Fakat Baby Driver hem senarisi hem müzikleri hem esprileriyle bizi mutlu etdi.Ve izlerken eğlenceli vakit geçirdik diye biliriz."
    },

    {
        "id": "065",
        "name": "fringe",
        "text": "Amerikan yapımı bilim kurgu dizisi Fringe konusunu irdeleyeceğimiz yabancı dizi tanıtımı bölümüne hoş geldiniz.FBI dünya çapında açıklanamayan olayları aydınlatmak için Boston, Massachusett merkezli Fringe adında bir ekip kurmuştur. Bu açıklanamayan esrarengiz olaylara örnek vermek gerekirse yeni doğan bir bebeğin inanılmaz derecede hızlı büyüyerek (5 dakika gibi bir sürede) yaşlanarak ölmesi verilebilir. FBI’da özel ajan olarak görev alan Olivia Dunham, metafizik üzerine araştırmalarda bulunan bilim adamı Walter Bishop ve bilim adamının oğlu Peter Bishop’ın esrarengiz olayları araştırması konu edilen dizinin yapımcıları diziyi The X-Files’dan ilham alarak tasarladıklarını ancak çok farklı bir tarza döndüğünü belirtmiştir. Fringe dizisinde esrarengiz olaylar, hastalıklar, paralel evren gibi bir çok konu işlenmektedir."
    },

    {
        "id": "066",
        "name": "the truman show",
        "text": "Dünyanın en güzel adalarından birinde yaşayan halk imrenilecek derecede ütopik bir hayat sürmektedir. Bu adada yaşayan insanlar her güne mutlu uyanıp herhangi bir sorunla karşılaşmadan günü sonlandırıyorlardır. Başkarakterimiz Truman da bu şanslı insanlardan biridir. Güzel bir eşe ve mutlu bir hayata sahip olan Truman, bir gün öldüğünü zannettiği babasını bir gün caddede gördüğü ana kadar hayatı olduğu gibi yaşar. Babasını gördüğüne emindir ancak adam bir anda ortalıktan kaybolmuştur. İlerleyen günlerde çeşitli gizemli anlar yaşayan Truman bir şeylerin yolunda gitmediğini fark edecek, sahip olduğu hayatın gerçek olup olmadığını anlamaya çalışacaktır. Televizyon sektörü üzerine yapılan en esaslı eleştirilerden biri olan Truman Show sinema tarihinin en yaratıcı senaryolarından birine sahip. Aynı zamanda başrolündeki Jim Carrey'nin olağanüstü performansını da es geçmemek gerekiyor."
    },

    {
        "id": "067",
        "name": "jungle",
        "text": "Filmden önce takımı olarak yeni bir konseptle başlıyoruz. Bundan sonra filmleri izleyiciler seçecek. Bizde bu filmleri izleyip video veya blog şeklinde size takdim edeceğiz. Önceki günlerde aldığımız on film önerisi arasında Daniel Radcliffe'in başrol aldığı Jungle filmini izledik. Filmi izlerken ilk yirmi dakikası boyunca boliviya ormanlarını nehirlerini bir sözle vahşi tabiatını yakından göreceksiniz.Filmin senarisi Yossi Ghinsberg'in yaşadığı olaylara uyarlanmıştır. Filmin izleyicisinin bu kadar olması belkide senarideki olayların gerçek hayatta yaşanmaş olması ile bağlantılıdır. Mevsuzu bir grup insanin boliviya ormanlarına seyahatleri ile başlar. Bu seyahat süresinde yolda başlarına çeşitli olaylar gelir. Çok fazla spoiler söyleyipte filmin tadını kaçırmak istemiyoruz. Film 2017'de izleyicilere takdim ediyor ve imbd puanının 6.7 olduğunu söylemek istiyoruz. Film ne kadar korku dolu olsada doğayla iç içe oluyorsunuz. Ormanları, nehirleri, hayvanları izlerken insan bir anlık bile olsa kendini filmin içinde gibi hissediyorsunuz. Filmin mevzusunu izledikçe Into the wild filmini hatırlatıyor. Yakında o filminde incelemesi gelecek."
    },

    {
        "id": "068",
        "name": "terranova",
        "text": "2149 yılındayız; dünya kaynakları tükenme noktasına gelmiş, hava kirliliği, nüfus artışı almış başını yürümüş. Devlet, nüfus planlaması ile ailede iki çocuktan fazla olmaması şartı koymuş. Hava kirliliği sebebiyle insanlar maskeyle geziyor (bildiğiniz ekosistem faciası gerçekleşmiş yani). Kısacası, Dünya yok olmanın eşiğinde. Ama ortada elbette ki muazzam bir teknoloji var ve bunun sayesinde zamanda geri gitmenin bir yöntemi bulunmuş. Dünya’yı bu durumdan kurtarmak için de belli sayıda insanı, belli periyotlarda, kafileler şeklinde 85 milyon yıl öncesine, dinozorlar çağına gönderiyorlar.Böyle bir ortamda, hayatını devam ettirmeye çalışan Shannon ailesi, aile planlamasıkuralına uymayıp üçüncü çocuklarına da sahip olmuşlar. Bu yüzden gerçekleşen polis baskını sonucunda, ailemizin babası Jim hapse düşüyor. Bu anlattıklarım tabiikide spoiler değil.Dizide bu olaylar çok çabuk oluyor.Onuda söyleyelim bu dizi eskiden FOX da 2011 yılında başlamıştı o dönemin en iddialı bilim kurgu dizisiydi diyebiliriz maalesef 1 sezondan fazla sürmedi.İzlemenizi şiddetle tavsiye ederiz."
    },

    {
        "id": "069",
        "name": "ironman",
        "text": "İronman filmlerini önceden izlemişliğimiz var.Fakat değerli izleyicimizin önerisi sayesinde yeniden izlemek kısmet oldu.2008de vizyona giren yönetmenliğini Jon Favreau.Baş rolde her kesin tanıdığı film de Tony Stark gibi tanıdığınız ilk kez onu ironman olarak sevdiğiniz Robert Doqney Jr. -dan bahs ediyoruz.Filmde Terrence Howard Gwenty Paltrow gibi isim yer alıyor.İmdb puanı 7.9 . Tony Stark bir playboy ve teknoloji delisidir.Kendisi teknoloji harikası silahlar ve füzeler üretmektedir.Afganistanda bir füze denemesinde esir düşer ve yaralanır.Ondan bir füze düzeltmesini isterler fakat o kendine bir zırh düzelder ve böylelikle İronman efsanesi doğar.Günümüzde Kaptan Amerika gibi İronman fanlarının sayıda baya çok ve bu rakam günden güne artmaktadır.İronmani solo filmleriyde deil aynı zamanda Avengers ve Spiderman homecomingde de görmüşlüğümüz var.Neyse konumuz bu değil .Filmle ilgili konuşmak gerekirse film iyi ve haraketliydi özelliklede Tony filme ayrı bir hava katıyordu.İronmanın karizması , öz güveni insanı hayran ediyor.Seyiriciyi kendine çekiyordu.Tabii zırhınıda unutmamak lazım.Kim istemezki, öyle bir zırh, istediğin zamanuça bileceğin daha güçlü ola bileceyin.Bu yüzden belkide bu kadar başarılı.Bir film sever olarak puanımız 8. @zeyzeyunl önerdiğiniz için teşekkürler.İyi seyirler dileriz. "
    },

    {
        "id": "070",
        "name": "i am legend",
        "text": "Hangimiz kendini Dünya’da bir Alman kurduyla yapayalnız hayal etmedi? New York’un yosun tutmuş sokaklarında Ford Mustang Shelby GT-500‘ün içinden M4A1 ile akşam yemeği için geyik avlamayı hangimiz düşünmedi? Ya da karanlık çökmeden dışarı çıkıp erzak toplama hevesine kim kapılmadı? Duygusunu çok başarılı bir şekilde aktarabildiği için bu yapımın bilimkurgu türü içinde yeri ayrıdır.Evet, yönetmen koltuğunda Francis Lawrence‘ın oturduğu ve başrolde Will Smith‘in yer aldığı 2007 yapımı post-apokaliptik bilimkurgu filmi olan I Am Legend‘den (Ben Efsaneyim) söz ediyoruz. Smith, Robert Neville adında, aslında kanser tedavisi için üretilen sentetik virüse bağışıklığı olduğu için hayatta kalan tek insan olduğunu düşünen virolojide uzmanlık yapmış askeri bir doktoru canlandırır. Will Smith bu rolde birçok ödül kazanmıştır ve film de farklı dallarda birçok adaylık almıştır.Filmin Türkçe İsmi; Ben EfsaneyimİMDB; 7.2Tür; Dram,Korku,Bilim Kurgu"
    },

    {
        "id": "071",
        "name": "hukumet kadin",
        "text": "Şöyle baktıkda genelde yabancı filmleri önerdiğimizi fark etdik.Bundan sonra türk sinemasının incilerini sizinle paylaşmaya çalışıcaz.2013 yapımı İmdb puanı 6.5 olan Hükümet kadından bahs edicez.Filmin yapımını Bkm Film üstlenmiş galiba 2 bölümden ibaret.Ama biz ilk filmden konuşucaz.Eğlenceli komik anlar yaşattan bu filmde özelliklede Demet Akbağ Sermiyan Midyat gibi oyuncuların performansları filme ayrı bir hava katıyor.Filmin konusu Midyat'ta yaşayan, 8 çocuk annesi Xate birden kendini Belediye Başkanı olu verir.E haliyle çözümler, sorunlar , insanlar bir sözle bu uyumu komik olarak insanlara tanıtan bu filmi beyaz perdeye oldukça iyi uyarlanmıştır .Sermiyan Midyat'ın yazıp yönettiği komedi filmi Güneydoğu'da yaşayan ve görev yapan ilk kadın belediye başkanının, sekiz çocuklu Xate'nin hikayesini anlatan ve bir kadının nasıl güçlü olduğunun nümûnelerinde biri olan bu yapımı izlemenizi öneririz.İzlerken eğlendiğimiz ve kahkahalar dolu anlar yaşadığımız bu filme puanımız 8.İyi seyirler dileriz "
    },

    {
        "id": "072",
        "name": "mother",
        "text": "Günümüzde kahraman filmlerinin başarılı ve ilgi olu olan dönemde sıradan filmler bizimde dikkatimizi çekiyor.Gerçi bu tür filmlerin izleyici kitlesini toplaması biraz zor oluyor fakat çok başarılı ve değerli izleyicimizin bize önerdiği severek izlediğimiz Mother! incelememizle karşınızdayız.Evet gelelim filme eğer has bir psikolojik korku hayranıysanız bu film tam sizlik .Güzel kadrosu sermayesiyle birlikte favori listemize eklenen bu film puanımız 7.Sessiz ve sakin bir evde yaşayan bir çiftin hayatlarının evlerine gelen yabancılar yüzünden darmadağın olmasını anlatan, seyirci fark etmeden ona üsulca içinde korku yaratıyor.Korku filmlerinde her zaman iğrenc ve dehşet verici yaratık ve insanlarla karşılaşırız.Fakat bu filmde gerçek hayatadakı kabuslarla üzleşdiğimiz gibi üzleşiriz.Başlarda korku hissi belirgin olmasada bir müddet sonra içimize dehşet salar.Ola bilir izlerken sevmeye bilirsiniz hatda filmi yarıda durdura bilirsiniz fakat bazı filmler vardır insanın aklında kalır ve bir müddet bile olsa onunla ilgili düşünürsünüz Mother filmide tapda böyle.İyi seyirler dileriz"
    },

    {
        "id": "073",
        "name": "pi",
        "text": "Uzun zamandır Azerbaycan dilinde paylaşımlar etmirdik.Amma bundan sonra davamlı olaraq paylaşımlar edecik.Pinin yaşamı.İlk önce bu filmi izlemek üçün @azecinema saytına gede bilersiniz.Keçek filme.Pi uçsuz bucaqsız okeanda bir macera ve sağ qalma mübarizesi aparır.Bu filmi Yann Martelin Life of Pi kitabından götürmüşler.Çıxdığı ilde en yaxşı filmlerden biri hesab olunur.2012 ci ilde izleyicilere sunulmuştur.Macera ve Dram janrında olan bu film Pi adlı bir hintlinin başına gelen gemi qezasından sonrakı hadiseleri gösterir.Elbetdeki her kitapdan götürülen filmde olduğu kimi burda da bezi qisimlerin kesildiyini kitapdakı kimi olmadığını düşünürük.Pi filmi $392,896,152 qazanc getirib.11 bölmede namized gösterilen Hind filmi olan Life of Pi ise 4 mükafat aldı. 127 boyunca heç darılmayacağınız bu filmi mütleq izleyin ve filmin keyfiyeti çox yaxşıydı.İster qrafikler ister görüntüler qayıq okean heyvanlar falan gözel bir senari ile izleyicilere sunulub.Aşağıdakı sehifeleride izlemeyi unutmayın"
    },

    {
        "id": "074",
        "name": "lone ranger",
        "text": "Vahşi Batı filmerini önceden önermediğimizi biliyoruz fakat bu tür filmlerin kendine özgün bir havası var.Bu tür filmlerden biri olan Lone Ranger filmini karşınızda sunuyoruz .Johnny Depp,Armie Hammer gibi isimlerin olduğu muhteşem bir yapı.Özelliklede Tonto'yu çok sevdik.Bol Aksiyonlu ve Komik dolu bir film sizi bekliyor.Müzik seçimleri harika.Johnny Deppin efsane oyunculuğunun bir kez daha şahiti oluyoruz.2013 yapımı dünya çapında 260,502,115 $ hasılat yaptı.Yönetmen Gore Verbinskinin üstlendiği bu filmin 2ci bölümünü isteriz.Kısacası izlemeniz gereken bir film olduğunu düşünüyoruz.İyi seyirler dileriz."
    },

    {
        "id": "075",
        "name": "mr.nobody",
        "text": "Yine karmaşık bir bilimkurguyla karşınızdayız.Bay hiç kimse .Fİlmin gedişi 2 yönde gidiyor genelde geçmiş ve gelecek.Yönetmen Jaco Van Dormael.Toto le héros ve Le huitième jour gibi filmlerin yönetmenliğini yapmış film beyninizi allak bullak yapan türden.Evet geçmiş ve gelecekten bahs etmişdik.Geçmişde 3 yere bölünüyor bir yerde.Buda bize sanki olasılığı anımsatıyor.Eğer okumadıysanız Adam Fawerin Olasılık isimli kitabını okuyun.Filmle ilgili çok bir şey anlatmaya gerek yok.İzleyince anlıcaksınız.Film favori listemizde ve hemen izlemenizi tavsiyye ederim.Fazla konuşursak spoiler vermiş oluruz filme 10 uzerinden 9 veriyoruz.Önerdiğiniz için teşekkürler "
    },

    {
        "id": "076",
        "name": "chappie",
        "text": "Yine değerli izleyicilerimizin önerdiği bir filmle karşınızdayız.Günümüzde virtual reallık,yapay zeka konusu gündemde ve gitdikçe gelişmekte tamda bu yerde Chappie aklımıza geldi.Bir robotun hayata gelmesi kendi düşünceleri en esasıda ölmeme isteyi yani yaşama isteyi daha doğrusu.2015 yapımı olan Aksiyon ve Bilim kurgu türünden,kadroda tanıdık isimler yer almakta.2015 yapımı yaklaşık 2 saat süren bir film.Film efektelr falan iyiydi.Fakat bu tür filmleri eskiden gördüğümüz için pek cazib gelmedi bize.Örneğin Robocop filmi bu tarzdı yine bir robotun suçla savaşmasını anlatan bir filmdi fazla durmayalım Robocopun üzerlnde ayrıca bir blogda konuşuruz bununla ilgili.Filmin senarisi pek açmadı bizi.Fakat effektler ve para iyi harcanmışdı."
    },

    {
        "id": "077",
        "name": "reservoir dogs",
        "text": "Tarantino ismi size tanıdık geliyormu ? Gelmediyse şöyle söyliyeyim Pulp fiction,Kill Bill evet hatırladınız dimi? Evet Rezervuar köpekleri yine Tarantinonun şah eseri.1992 yıl yapımı olan bu film bizim için filmdir. grin duyğu işarəsi şaka şaka Güzel bir film evet bu doğru.Kadroda Harvey Keitel,Tim Roth,Steve Buscemi,Chris Penn,Michael Madsen roll alıyorlar.Filmin hasilatı ABD'de 2,832,029 $ hasılata ulaşmıştır.Kendi dönemi için baya iyi bir rakam.Joe Cabot , büyük bir elmas mağazasını soymak için, oğlunun da dahil olduğu bir ekip hazırlar. Renk isimlerini kod isim olarak kullanan ekibin adı, rezervuar köpekleri. İşinin ehli gibi gözüken ekipte, Joe'nun oğlu da vardır. Soygunun planları yapılır. En ince detayları bile gözden geçirilmiştir. Ama soygun planlandığı gibi işlemez. Mağazaya gelindiğinde tuzağa düşerler. Ekibin içinde polis olduğunun farkına varırlar. 'Kim, kime silahını çekeceğini',, 'kimden şüpeleneceğini, bilemez durumdadır. Silahlar çekilir. Etraf bi anda kan gölüne döner. Soyguncuların bir kısmı bir depoya sığınır. Depo içerisindede bir hesaplaşma vardır.Evet bu kısmı okumadan geçe bilirsiniz bizde bazen spoiler vermke zorunda kalıyoruz.Film bildiğiniz gibi aksiyon türünden.Fakat ben eski filmleri izlemem düşük kaliteli derseniz o ayrı.Ama Quentin Tarantino ismi yeter filmin harika olmasına puanimiz 90.İyi seyirler dileriz. "
    },

    {
        "id": "078",
        "name": "the sixth sense",
        "text": "Selam millet .Bu gün 2000-ci yıl yapimi olan filmi inceliz.Yönetmenliğini M. Night Shyamalanın üslendiği 6-cı his filminden bahs ediyoruz.Kadroda Bruce Willis, Haley Joel Osment, Toni Collette gibi isimleriin yer aldığı gerilim türünden bir film.Film eski olduğu için kalite bakımında düşükdü.Filmi izlerken korku atmosferi çok güzel.6cı hiss 672.806.292 $ hasilat yapmış buda onun güzel film olmasının bir kanıtıdır.Biz korku filmi sevmeyiz fakat bu film harika.Film bir çok ödüller kazanmış bunlardan bir kaçını size sunmak istiyoruz : Nebula En İyi Senaryo Ödülü,Bram Stoker En İyi Senaryo Ödülü,En İyi Drama Filmi Ödülü...."
    },

    {
        "id": "079",
        "name": "me early girl",
        "text": "Bu sıradan bir film yada aşk filmi de değil.Yada beklediğiniz o gençlik filmi de değil , bu karışık bir şey .Hem drama hem komedi bir arada tam üzülcem derlen pat diye bir espri geçiyor.İzlerken size Kağıtdan kentler ve Aynı yıldızın altında filmini anımsatıyor .Aynı yıldızın altında fazla dramdı, Kağıtdan kentlerde fazla maceracıydı.Bu film mix edilmiş. Zaten çekiliş yani kamera açıları farklı.Greyi ve Earlı izlerken kendinizi anımsatıyor bir anlık.Genclik lise tamda üniversite dönene hazırlanırken.Bu tür filmler hep o dönemi seçer.Niesini bizde bilmiyoruz.Filme seçilen müzikler çok güzel. Bildiğimiz kadarıyla kitapdan uyarlandı fakat biz kitabını okumadığımız için ne spoiler nede geniş özet vermek istemiyoruz. Umarız filmin 2ci bölümü çıkar.Puanımız 99 "
    },

    {
        "id": "080",
        "name": "figth club",
        "text": "Brad Pitt, Edward Norton ve Helena Bonham Carter gibi ünlüler size bir şeyi andırıyor mu? Evet 7- den 70-e her kesin izlediği.Kafaları yandıran 1999 yıl yapımı bir film. Şizofrenik olaylar, kavgalar , olaylar . Sözlerle anlatılmaz bir film. Üzerinden 19 yıl geçmesine rağmen hala sevilen hala izlenilen adına toplumlar oluşan bir filmden bahs ediyoruz.Dostlar Fight cluba hoş geldiniz . 32 oskar dalında aday görülmüş 10 u kazanmış.İmdb puanı 8.8 .David Fincher tarafından yönetilmiş, 100 milyon dolar hasılat yapmış ve 2000 yılında film, en iyi ses efektleri dalında Akademi Ödüllerine aday oldu ve 2001 yılının kasım ayında en iyi film müziği dalında Brit ödülünü almıştır.Film o kadar güzel ki , azcık bile spoiler vermek istemiyoruz. Tatilden faydalanarak hemen izlemenizi tavsiye ederiz. İyi seyirler "
    },

    {
        "id": "081",
        "name": "mad max fury road",
        "text": "Arabalar,Kaçaklar,silahlar.size bir şeyi anımsatdımı?Evet Madmax .Aslında çok uzun zamandır izlediğimiz bir film konusu değişik .O yüzden bı kadar başarılı bizce.Bu tür film sanırım önceden hiç izlemedik.Gelelim filme karanlık yerler vardı saçma sapan yerlerde vardı.Fakat film iyiydi izlerken sıkılmadık.Puanımız 100 üzerinden 80 .İzlenir bir film effektler falan çok iyiydi fakat favori bir film değil bizim için. Bir kere izlenirmi izlenir . sizin düşünceleriniz nelerdir yorumlarda bize bildirin"
    },

    {
        "id": "082",
        "name": "spectral",
        "text": "Netflix korkdunnmuuu? Spectraaall korkdunmuuu?Dünyanın sonuuu korkdunmu? Korkmadınmı? Tabii ki, korkmıcaz neden çünki artık filmi izlerken sonunu doğru tahmin etmekden bıktık.Evet güzel filmler var fakat aynı yapıyla gitmesi bi çok filmin bu yanlış.Şimdi filmde başlarda bir karakter gösterirler sizde onu anında filmin kahramanı olarak belirlersiniz sona dünya ve insanlık ırkının sonu gelmekte veya tehlikeli de .Şimdi bu kahramanımız bir şekilde yardım alarak dünyayı kurtarır. Olay budur bir çok filmde .Spectrala gelicek olursak evet filmde baya bir emek vardı.Silahlar askeri arabalar mekan falan .Baya bir para harcanmışdı. effektler iyiydi.Ama yapısı dediğimiz gibiydi. Bu yüzden en önemli olan bizim için farklılık aynı filmi bizde izlemek istemiyoruz bu yüzden captain fantastiki , swiss army mani, yine bir netflix yapımı olan brightı beğendik .Çünki konular farklıydı.Önceden izlemediğimiz için şaşırtdı bu filmler.Puanımız 100 üzerinden 50 senariye baya bir kırdık doru fakat üzgünüz @mustti_aksoy önerdiğin film içinde teşekkürler.Film izlenirmi evet izlenir sadece televizyonda boş zamanında.Bizi de anlayışla karşılardın umarız. İyi seyirler"
    },

    {
        "id": "083",
        "name": "Snowpiecer",
        "text": "Sizdengelenler konseptinin sıradakı filmini sizlere sunuyoruz @busratunnca sayesinde izlediğim bu film sizlere öneririz.Kendisine çok teşekkürlerimizi sunuyoruz.Gelelim film film açlık sefillikle zenginliğin uyumunu düzgü anlatmış.Aslında sistemin nasıl güzel bişey olduğunu fakat her zaman bir isyan arzusunda olan insanları anımsatması da güzel olmuş.Filmde evet ters köşeler sizi bekliyor fakat bazı saçma yerleri vardı.Bu yüzden puan kırıcaz.Puanımız 100 üzerinden 70 . Şiddet ve aksiyon dolu bir film sizi bekliyor.İzlenir bu film. "
    },

    {
        "id": "084",
        "name": "Swiss Army Man",
        "text": "Eveeet bir kaç gündür yokuz .Özlemişsinizdir diye düşündük 5 tane filmle geldik.İlk filmimiz kendi seçimimiz olan ulan ben az önce ne izledim dedirten. Bu ne saçmalık . Hayatımda ben böyle güzel saçmalık izlemedim dedirten bir film.Final dönemi bitdikden sonra bu film moral bakımında çok iyi geldi.Yani en azından 1 kere izlenir bir filmdi.Minik spoiler verelim osuruk sevmiosanız izlemeyin 😄Puanımız 100 üzerinden 65 .En iyi filmler listesinde fakat aşağılarda . Daniel Redcliffin harika oyunculuğunun bir defa da şahitlik yaptık.Size iyi seyirler dileriz "
    },

    {
        "id": "085",
        "name": "Arif V 216",
        "text": "2018’in en çok beklenenler arasında olan film Arif v 216 vizyona girdi ve biz de filmi sinemadan izledik.Şimdi size düşüncelerimizi, duygularımızı ne varsa anlatacağım.Filmde her şey var komedi,aksiyon,dram ve bu filmi güzel bir hale getirmiş.Eski filmlerine karşılık ve ya başka bir şeylere çok gönderme yapılıyor.Ben Cem Yılmaz’ın bütün filmlerini seyrettiğim için espriler hava da kalmadı rahatça anlayabildim.60’lı yıllar filmde gerçekten çok hoş olmuştu.Mekanlar,dekorlar yani her şey vardı.Filmi izlerken keşke 60’lı yıllar da yaşasaydım dedim.Özellikle o eski ünlüler nasıl filmi hoş tutmuş anlatamam.Ve unutmadan söyleceğim film harika müziklere sahip. Sadece beğenmediğim filmin son kısımıydı.Yine de harikaydı ama ufaktan beni sıktı sadece o kısım da.    Cem Yılmaz ve güzel ekibi yine turnayı gözünden vurmuş kısacası.Benim bu güzel filme puanım kesinlikle 9/10."
    },

    {
        "id": "086",
        "name": "Fury",
        "text": "Yıl 1941-1945 arası.2-ci Dünya savaşı.Aclık sefillik Aclık sefillik her yerde.İnsanlar ailelerini itirmiş.Askerler bıkmış yorgun aç bazılarının gözünde korku bazılarında ise ateş kin intikam var.Savaşın nasıl zordu ve acımasız olduğunu seyirciye mükemmel anlatan bir film.Yapımcılar filmde öyle bir ortam aura yaratmışlarki, savaşın acısını korkusunu aktörlerin gözlerinde göre biliyoruz.İzlerken sıkılmak kelimesini kullanmıcağınız bir yapım.Film bir sahneni star wars :D Işın savaşlarına benzetsekde cidden harika bir iş çıkarmışlar.Brad Pitt , Shia Labeouf oyunculuğu harika eklenmiş.Yaptıkları film için yönetmenlere ve oyunculara teşekkür ederiz.Bizim sevdiğimiz filmler arasında.Bizim puanımız 9/10.En iyi savaş filmlerinde ilk 2de.Şiddetle öneririz.O duyguları siz yaşayın.Başka savaş filmlerini önermek isterseniz yorumlara yaza bilirsiniz. "
    },

    {
        "id": "087",
        "name": "Lawless",
        "text": "Büyük Buhran döneminde geçen bu filmde içki kaçakçısı 3 taşralı kardeş ele alınıyor. İçki yasağı döneminde 3 kardeşten biri olan Jack Bondurant (Shia LaBeouf)’ın en büyük hayali “1 Numaralı Halk Düşmanı” olmaktır ve bu hayalini gerçekleştirmek için gangster yaşam tarzının sunduğu olanaklardan yararlanır.Bu kardeslerden büyük ve ortancil kardesler kendelerine ölümsüz diyorlar bununda ilginc hikayesi var filmi izlerseniz haberiniz olur    Üç kardeşin kanunlarla ve gangsterle mücadelesini anlatan filmde Tom Hardy‘nin oyunculuğuna diyecek yok. Bunun yanında Shia LaBeouftan bu kadar profesyonelce bir oyunculuk beklemezdim ama iyi iş çıkarmış.    Film genel itibari ile mükemmel. Senaryo ve oyuncular hepsi 10 numara. Yönetmen 1931 yılında geçen filmi 2012 yılında çekmesine rağmen en ufak bir mantık hatasına yer vermemiş o dönemi en uygun bir biçimde beyaz perdeye aktarmış. Bununla birlikte oyuncular ve canlandırdıkları karakterler birbirleri ile çok uyumlu.Film genel olarak sakin gecmesine ragmen deginilen konularin fazlaligi ile birlikte izleyicini sıkmıyo. Izlerken zamanin nasil gecdigi bilinmiyo. Fazla aksiyon sahnesi olmasa da suç ve dram gerçekten iyi bir şekilde işlenmiş. Film son zamanlarda kendi kategorisinde izledigim ey iyi filmlerdendi. Puanim 10/8.3 "
    },

    {
        "id": "088",
        "name": "Wild",
        "text": "Doğa severler hemen buraya, şanslısınız ki, ekipden sizin gibi birisi var.İnto the wild, captain fantastic ve şimdide Wild evet bu filmler efsane filmler dostum . Gerçekçi,macera doğa bu 3nün toplamı evet harika bir film ortaya çıkarıyor.Bir patikada yürüyen bir kadın bir ülkeden diğer ülkeye seyahat ediyor ve filmi izlerken sanki sizde onunla yürüyosunuz .Bu tarz filmler az fakat vizyondakı 3-4 film varsa 3-4 üde harika 99% puanla en sevilenler arasında izlemeyi önermekmi??? Hemen izleyin hemen deriz "
    },

    {
        "id": "089",
        "name": "Maze Runner 1",
        "text": "Evet bazen soruyolar ki, neden bu filmi paylaşmamışsınız, neden o filmi paylaşmamışsınız.Sebebi şu ki, sayfa yeni yeni kendi gelmekte toplam 50 film paylaşmışızdır ve devamda edioruz edicezde.Neyse konumuz bu değil.Konumuz bizim okul zamanında heyecana boğan bu film.Macera,aksiyon,aşk dünyanın sonu yeni bir başlangıç ne desen var bu filmde hemde 3 hisseden ibaret olucak.İlki çok iyiydi 2-cisiyle ilgili sonra konuşucaz.3cüsü yeni çıktı ve henüz sinemalarda.Filmi izlerken sıkılmıcaksınız fakat karanlıl noktalar olucak. Ve büyük ihtimalle bir çoğunuz bu filmi izledi. Beğeni puanımız 70 % . Karanlıl noktalar ve yarım bitmesi yüzünden.Film yarım bitmesi seyircinin yüreğinde oturtur her zaman. O yüzden ya hepsini çekin filmin.Yada hiç çekmeyin. "
    },

    {
        "id": "090",
        "name": "Kingsman 2",
        "text": "Yine bir apokalipsiz yine dünyanın sonu yine kötü adam ve yine kahramanımız var elimizde. Kingsman -ı hatırladınızmı , ilk filmini çok beğenmişdik fazla fantastik olmasına rağmen. Bu film onun 2si napmışlar biliyormusunuz? Biz anlatalım spoiler vermeden.İlk filmdeki izlediğiniz fantastikanı almışlar bokunu çıkarana kadar artırmışlar.Konusuda aynı , kadroda bazı değişiklikler yapmışlar yeni aktörler gelmiş, eskileride yani gereksileride tüm filmlerde olduğu gibi öldürmüşler.Zaten izleyince görüceksiniz.Fazla eleştirel yanaşmamızın sebebi işte bu aynı tarz gidio. Genellikle bu tarz şeyi diziler yapar bizce Kingsman ya birde kalmalıydı yada dizi haline gelmeliydi.Sürekli dünyanı kurtarmak sıkıcı geliyor bir kısımdan sonra izleyicilere. Kingsman 30% beğendik oda effektler ve ilk filmin hatırı için onun dışında film çocuksumsuydu. "
    },

    {
        "id": "091",
        "name": "Happy Death Day",
        "text": "Ne demiş yönetmenimiz Happy Death Day. Şaka şaka kimse ölmücek ve yarın yeni gün başlayacak.Evet izlerken Edge of tomorrowu hatırlatan bu yapım aslında bir korku filmi.Fakat biz korkmadık tabiiki, bizim için 2017 -nin en iyilerinden.İçinde hoş bir gizem taşıyor.Ve izlerken kendi düşüncelerinizi kendi varsayımlarınızı yürüte biliyorsunuz.Genelde biz öyle yaparız.Filmi 90% beğendik. 10 % ise şarkılarına kırıyoruz.Fragman şarkısı güzeldi fakat filmde olmadığı için kötü olduk.Hangi şarkıdan bahs etdiğimizi bilmiyosanız fragmanı izlemeyin direk filme geçin.İyi seyirler dileriz. ."
    },

    {
        "id": "092",
        "name": "12 Angry men",
        "text": "Arkadaşlar bildiğiniz üzere istek listemizdeki filmlerden her gün birin izleyip size incelememizi sunuyoruz.Bu gün incelediğimiz film daha öncede izlediğim tarihin başyapıtlarından olan 12 Angry Men filmi olacak.12 Öfkeli Adam, güzel ve etkileyici bir film çekmek için milyon dolarların harcanması gerekmediğini ispatlamış en önemli örneklerden biridir. Senaryo – kurgu ve yönetmenlik üçgeninin önemini bir ders niteliğinde sinema tarihine bırakmıştır. Tartışma sanatıyla diyalektiğin bir arada yürüdüğü film, öyle bir etki yaratıyor ki, on iki karakterden ayrı ayrı on iki film çekilebilir dedirtiyor insana. Döneme göre sinematografisi de gayet başarılı olan film, günümüzde ABD ulusal film arşivinde muhafaza edilmektedir. Film tek odada geçiyor ve her dakikası her saniyesi dolu dolu geçen bu filmde bir cinayet davası görülüyor. Bir çocuk düşünün, Amerika'nın kenar mahallelerinde yaşıyor, toplumdan dışlanmış, ne yapsa sırf geçmişi oraya ait diye hoş görülmüyor. Sonra bir olay yaşanıyor, gecenin bir yarısı bir adam ölü bulunuyor. Olay yerinde de bir bıçak bulunmuş, bir de bakıyorlar ki bıçak çocuğa ait, kısa bir sorgulamanın ardından, çocuk belki korktuğundan belki de gerçekten o suçu işlediğinden fazla söyleyecek bir şey bulamıyor. Cinayetin işlendiği sırada, sinemada olduğunu söylüyor ama filmin adını da hatırlayamıyor. Tüm bu çelişkiler, insanların ön yargılarıyla birleşince, suçlu hemen bulunuyor. Mahkeme görülüyor ve iş Mahkeme jürilerine kaldığı için 12 üyeden oluşan jüri bir odaya alınıyor.Görevleri suçlu veya suçlu değil şeklinde ortak karar almak. Bizim bu filme Puanlamamız;10/9.5"
    },

    {
        "id": "093",
        "name": "Blade RUnner 2049",
        "text": "Evet, dün söylediğimiz gibi sizden gelen 10 filmi inceliceğimizi söylemiştik ve seriye başladık.İlk filmimiz @geraldofriva43 önerdiği blade runner 2049.Filmi izledik ilk bir saat valla bişey anlamadık. Galiba konusunun ilk filmle alakası var o yüzden. Gelelim filmimize başlarda fazla aksiyon yok, daha çok konunu seyirciye aktarmak için yer ayrılmış ama sonradan tempo artıyor.Film robot ve insan uyumunu güzel anlatmışlar.Her bir son yeni bir başlangıç demektir.Bu fiminde konusu bu.Ve açıkcası pek sevmekdik . Önerirmiyiz öneririz değişiklik olsun diye. Puanlamamız ise 40% beğendik. "
    },

    {
        "id": "094",
        "name": "Ayla",
        "text": "İyi akşamlar değerli Filmdenonce takipçileri bugün eleştirip ve incelediğimiz filmi sinemada izlediğimiz ve beğendiğimiz Ayla filmi olacaktır. Her daim bütçesizlikten kırılan Türk sinemasının hayal gücü ay sonunu getirmeye çalışan bir memurunkine benzer.Türk sinemasının günümüzde nasıl vasatın altında olduğunu söylesem bence sinefiller bana katılır.Ama Kore savaşını ve oradaki Türk birliğinin macerasını yürek ısıtan bir öyküde birleştirerek seyirciye sunma hevesinde olan Ayla, bu tuzaklara düşen bir yapım değil çünkü ekip ne çektiğinin farkında ve sponsorluklardan da güç alarak özenli bir prodüksiyona imza atıyor.Oyuncu kadrosuna baktığımızda ise gördüğümüz şey şu; İsmail Hacıoğlu, Ali Atay ve Kim Seol filmin asları… Ali Atay, Mecnun karakterinden çıkmamaya yeminli olsa da filmin en dikkat çeken oyuncusu o oluyor.Toplamda, Türk ve Koreli oyuncuların uyumlu performanslarıyla geçmişten çıkıp gelen bu yürek ısıtıcı hikâye bu topraklarda yaşayan insanların Anadolu gibi kadim ve merhametli bir yüreğe sahip olduğunu gösteriyor ve bu açıdan önemli. Filmin güçlü bir duygusu var; Türkler kendi topraklarından çıktıklarında yetim ve öksüz hissederler ve kendileri gibi olanlara sonsuz bir merhametle bağlanırlar.Film Kendi Kategorisinde son yıllarda sinemaya sunulan birçok Filmlerden daha başarılı diyebiliriz konu açısından.Ama bizce ne kadar iyi bir film olsada kendi kategorisinde ve birçok sahnelerinde olan konu kopmalarından dolayı Oscarı tabiikide hak etmiyor."
    },

    {
        "id": "095",
        "name": "Old Boy",
        "text": "Oh Dae-su, bir gün kendisini küçük karanlık bir hücrede bulur. Oraya kimler tarafından ve niye kapatıldığını bilmeyen adamın dünyayla bağlantısı sadece hücresindeki küçük televizyondur. Haberlerde karısının öldürüldüğünü duyunca olayla bağlantısı olduğu düşünüldüğü için kapatıldığını anlar. 15 yıl sonra, serbest bırakılan adam, ailesini öldüren kişileri bulmaya ve kendisini oraya kapatanlardan intikam almaya karar verir. 2003 yapımı Kore Filminin yönetmeni Chan-wook ParkFilmin Türkçe İsmi; İhtiyar Delikanlı İMDb; 8.4"
    },

    {
        "id": "096",
        "name": "Life is Lovely",
        "text": "Gerçek mutluluğun bedava olduğunu ve öyle bir yerde satılmadığını, filmde dediği gibi mutluluğun formülünün şişeleyip satılmadığını, bir anlamda anlatmaya çalışan Müfit Can Saçıntı, bu defa ki bağımsız yapımında daha güçlü şekilde gelmiş. Filmdeki espriler o kadar yerindeki, gülmeden yerinizde durabilmeniz mümkün değil. Uzun zamandır bir filmde bu kadar çok eğlenerek ve hissederek güldüğümü hatırlamıyorum. Yine Mandıra Filozofu’ndaki gibi yine ilginç anekdotlar da bu filmde karşımızda. Örneğin sınavlara karşı çıkan Müfit, bu tezini Newton ve Arşimet gibi dehalardan sunuyor ve karşısındaki adam da susa kalıyor. Mesela illa erkeğin mi çiçek alıp çıkma teklif etmesi lazım, bir kız bunu yapamaz mı diyerek kızına gaz veriyor. Başta dediğim mutluluk formülünün şişeleyip satılması konusu da önemli. Bu filmleri hemen geçmemek lazım. Derininde bulunan ağır felsefeleri, film bitiminde sizleri iyice düşündürüyor.Hüznü ve komediyi harmanlayan film, yaşam koşullarına boyun eğen, sessiz ve pısırık bir adam olan Müfit'in, başına gelen talihsiz bir olay ile baş kaldıran bir anti kahramana dönüşmesini ve yaşamın güzelliklerini keşfetmesini konu alıyor"
    },

    {
        "id": "097",
        "name": "Hile",
        "text": "Evet Netflix Lucas film falan diyoruzda yerli dizileri filmleri unutduk be yaa . Gece uyumadık internetde dolaşırken Hile dizisi çıktı karşımıza eh haliyle oturup izlemeye başladık.Bildiğimiz kadarıyla dizi @filmlervefilimler yapımı.Ve aşağı bütçeli bir dizi.Öyle hemen moralleri bozmayın haa dizinin konusu çok iyi biraz büdceyle dahada iyi hale gele bilir. Türk dizilerin 90 faiz oranı aşk sevgi ihanet gibi konuları yer alıyor ve gerçekten bizim için bu konular saçma geliyor.Fakat bu dizinin konusu yazılımla ilgili olduğu için bizim ekipden biride yazılımda okuduğu için haliyle ilgimizi çekti ve değişik bir dizi aslında.Şimdi dersinizki, noldu her şey size değişik geliyor.Normalde bu tür diziyi her hangi bir amerikan firması yaparsa ki, buna benzer ister dizi olsun ister film olsun yaptılarda.Misalen Who am I, Mr robot.Türkiyenin bu konunu işlemesi şaşırtdı.Neyse geçelim diziye .Diziyi sadece bir bölüm izledik.Muhtemelen bir çoğunuz diziden haberi yok izleyenlerde filmler ve filimler sayfasının takipçileri zaten.İlk bölümde aksiyon yoktu.Dizinin konusunu seyirciye anlatmışlar.Diğer bölümleri izledikde sonra oylama yapıcaz.Ama bir göz atın izleyin deriz.Konusuna değinmicez lütfen sizde izleyin ki bizi anlayın.Zaten 1 bölümü 22 dakika.İyi seyirler dileriz "
    },

    {
        "id": "098",
        "name": "The Shining",
        "text": "Cinnet size iki eşsiz deneyim vadediyor;ilki king & kubrick ortaklığının acı meyvesini tatmış olmak,ikincisi ise bu filmle beraber kendinizi izlemek;hatta kendinizden bir miktar korkmak.Korku anne karnında öğrendiğimiz bir duygu,temel işlevi bizi tehlikelerden uzak tutmak;ama bazen de usta işi bir korku filmi izlerken bize sinemasal bir haz yaşatır.Peki bizi en çok ne korkutur?Sanırım bu sorunun cevabı,en yakınımızdaki insanlara bile güvenmemek.Jack bir aile babası,birazcık alkol sorunu olsa da;bu güne kadar ailesini sevmeyi ve korumayı başarmış biri.Bekçiliğini yapacağı büyük bir otelde yaşamaya başlamasıyla birlikte korkunun resmi geçit töreni başlar.Stephen king'in bir korku profesörü stanley kubrick'inde görüntü dehası olduğunu düşünürsek;ortaya -bilinçaltı labirentlerimizde- elinde baltayla içimizde çocuk kalan her şeyi kovalayan bir Jack Torrance çıkıyor.Tabi tüm bu bahsettiklerim filmi etkiye açık bir beyinle izlemeniz halinde olacaklar.Eğer önünüze bir kase çerez yanınıza da kankanızı alırsanız,film Stephen king yine yazmış abi levelini geçemez.Adamakıllı korkmak her sinefilin hakkıdır diyorsanız teker teker gelin...Filmin Türkçe İsmi; Cinnet"
    },

    {
        "id": "099",
        "name": "Bright",
        "text": "Eveet gelelim Brighta.Yaklaşık bir ay önce vizyona girmiş ve Netflixin ilk yaptiği bir film. Değişik bir film gerçekten uzun zamandır zaten böyle değişik bir film izlememişdik.Bol aksiyonlu ve içinde aşk sevgi konusuna dokunulmamış ve sanırım bu yüzden çok beğendik.Brighta seçilen müziklerde harika.İzleyincede zaten sıkılmıosunuz filmin konusu biraz karışık elf ork ve insanın birlikte uymunu harika bağlamışlar. Ve modern hayatın super kahramanlarını iyi anlatmışlar. Kahramanlarımızın özel güçleri olmadığını, onlarda içimizden biri olduğunu seyirciye aktarmışlar.Ve Netflixe teşekkür ederiz yaptıkları diziler gibi filmde iyi olmuş. Burdan Netflixe sesleniyorum kimse bu tür değişik filmler yine yapsın kimse izlemese bile biz izleriz.Ve oylamak gerekirse 90% güzel olmuş. 10 % ise bazı tamamlanmamış yerler vardı ki, seyirciye karanlık kaldı.Sizede bu filmi öneririz. "
    },

    {
        "id": "100",
        "name": "Star Wars Last Jedi",
        "text": "Selam nasilsiniz? evet döndük bu gün sizlere star wars : Last Jedi filmini dün line sürümle izlefik kötü görüntüsü bile olsa uzun zamandır beklediğimiz için izledik.Star wars severleri kırmak istemeyiz ama faizle puanlamakta olsak 40 % beğendik.O da eskisi karakterleri gördüğümüz için ve filmde eskiden süpriz bir isim var . Hayır Luke Skywalker deil, başka biri. İzledikde görüceksiniz.Evet ümumilikte senari aynıydı diğer Rogue One ve The Force awakens gibi. İyiler ve kötüler savaşıyor. Jediler ve Sithler ana figür rolunu oynuyor. fazla spoiler vermek istemediğimiz için fazla konuşmucaz yeni film olduğu için ve çoğunuzun izlemediğini farz edersek. Eh o zaman size iyi seyirler akşam Bright incelememiz geliyor."
    },

    {
        "id": "101",
        "name": "Justice League",
        "text": "Merhaba arkadaşlar.Yine bir uğursuz dc filmiyle karşınızdayız.Justice league izledik ve açıkçası hiç sevmedik ama bazı yerlere dokunmak lazım.Mesela Aquaman ağır biraderdi evet asabiydi bi o kadar da çılgındı.Wonder Woman yine pürüzsüzdü.Bunlar dışında hiç beğenmedik.Özelliklede Batmani gerçekten böyle güçlü bi karakteri bu hale nası getirdiniz inanamıyoruz.Elinde bir tapancayla oyana koşturuyor bu yana koşturuyor ve sürekli bir ölmek arzusu var .Film boyunca bir kaç yerde kendisinin güçsüz olduğunu belirtiyor.Bu olayın Ben Affleckin filmden ayrılmak isteğiyle ilgili olduğunu düşünüyoruz.Aynı zamanda Shazam ve Green Lanteri gördüğümüze sevindik 1 sahnede.Superman döndü ve keşke bu kadar güçlü olmasaydı dedik.Flash ve Cyborg la ilgili konuşmak gerekirse Flash tam bir ergen gibi davranıyordu.Cyborg ise kendisini genius olarak göstermeye çalışmışlar filmde.Ve kötü karakterle ilgili konuşmak gerekirse sıradan dünyayı yok etmeye çalışan bir karakter işte.İşte özet geçmek gerekirse film böyle.Dc -nin gelicek projeleri arasında bir solo Aquaman filmi geleceğini duyduk,Bundan ilave Shazamında solo filmi geliceğini duyduk.Umarız bunu başarırlar ve açıkcası böyle Justice league görmek "
    },

    {
        "id": "102",
        "name": "Dunkrink",
        "text": "2017 yılında gösterime giren ABD ve İngiltere ortak yapımı savaş türündeki filmde ise 2. Dünya Savaşı’nın ilk yıllarında Nazi Almanyası’nın net bir üstünlüğü vardır. Mayıs 1940’ta İngiltere, Kanada, Fransa ve Belçika’ya ait müttefik ordularından 400 bin asker, Fransa’nın İngiltere’ye çok yakın Dunkerque bölgesinde Alman Ordusu tarafından karadan tamamen kuşatılmıştır. Almanlar bu askerleri hava bombardımanlarıyla yok etmeyi planlarken, İngiliz Başbakanı Churchill’in yönlendirmesiyle askerleri kurtarabilmek için çok tehlikeli ve savaşın gelişimi açısından hayati önemde bir tahliye operasyonu başlatılır. Christopher Nolan yönetmenliğindeki filmde ise oyuncular Tom Hardy, Cillian Murphy ve Mark Rylance başrollerde. İyi seyirler."
    },

    {
        "id": "103",
        "name": "Thor Rangnarok",
        "text": "DİKKAT DİKKAT DİKKAT SPOİLER İÇERİR!!!!!!!! Evet arkadaşlar bu postu 2 ci kez yazmamıza rağmen çok güzel bir filmden bahs edicez.Aylardır hd beklediğimiz Thor : Ragnaroku malesef line sürümle izledik.Yaklaşık 2 sat süren bu film diğer thor filmleriyle kıyasda daha eylenceli ve espriliydi.Evet gelelim filmin konusuna.Filmde Hulkı gördük ,Doctor Strange gördük,Thanosu bile gördük.Konusu şöyleki Hela yani Thorun ablası Odin öldükden sonra ortaya çıkar ve Thorla kapışır bu esnada Thor çekicini kayb eder ve boyut değiştirirken başka bir gezegene Lokiyle birlikte düşer burda gladyatör olarak Hulkla savaşır ve onu kendine getirir sonra takımı kurar ve gider Helayı alt eder bu kadar basit yani 😄şaka şaka filmi siz yinede izleyin biz anlattığımız kadar kısa değil. İyi seyirler."
    },

    {
        "id": "104",
        "name": "Paul",
        "text": "Bu gün size tavsiye edeceğimiz film dönemine göre en başarılı filmlerden sayılan Paul filmi.kısaca özet geçersekFilm, Comic-Con’a katılmak için ABD’ye giden iki çizgi-roman fanatiğinin yol boyunca başından geçen komik maceraları anlatıyor. İkilinin yolculukları yolda karşılaştıkları Paul isimli uzaylı ile bambaşka bir hale bürünecektir...İMDb; 7.0"
    },

    {
        "id": "105",
        "name": "Sausage Party",
        "text": "İyi akşamlar Filmden Önce nin takipçileri bugün size tavsiye edeceğimiz düşündüğümüz tüm gerçeklerle alay etmiş , göndermelerle dolu, evde arkadaşlarla! eğlenerek izlenecek bir dvd filmi. olan Sausage Party olacaktır kısa bir özet geçersek. Yetişkinler için hazırlanan bu komedi animasyon filminde, Shopwell's bakkal dükkanındaki Frank adlı kahraman sosis ve arkadaşlarının raftan düşmeleri, bir anda kendi varlıklarını hissetmeleri ve gerçekleri keşfetmelerine şahit oluyoruz. Raftan düştükten sonra arkadaşlarıyla beraber yaşamaya başlayan sosis Frank, hayatının amacının ne olduğunu anlamak adına birbirinden eğlenceli maceralara atılır ve sıradışı bir komediye adım atar. Klasikleşmiş filmlere göndermeler yapan, tüketim kültürüne, cinsellik alışkanlıklarına ve dinlere yönelik sert eleştiriler içeren animasyon, panseksüel bir bakış açısıyla yazılıp yönetilmiş. Seslendirmeleri Kristen Wiig, James Franco, Salma Hayek, Seth Rogen, Jonah Hill, Michael Cera gibi sinema dünyasının ünlü isimleri üstleniyor. "
    },

    {
        "id": "106",
        "name": "Citizen Four ",
        "text": "Merhaba arkadaşlar bugün tavsiye edeceğimiz film Sinema tarihinin en önemli belgesellerinden biri olan Citizenfour olacaktır.Filmin konusun kısa özet geçersek. Tarihin en ses getiren olaylarından birinin kahramanı olan üst düzey CIA analisti Edward Snowden'ın hikayesi, senenin en iddialı yapımlarından biri olan Citizenfour belgeselinde izleyiciyle buluşuyor. Amerikan Ulusal Güvenlik Ajansı'nın, vatandaşların özel hayatlarının gizliliğini yasal olmayan yollarla, gizlice ihlal ettiğini açığa çıkaran Snowden, belgeselci gazeteci Laura Poitras ve gazeteci Glenn Greenwald ile Citizenfour takma adını kullanarak iletişime geçer. Üçünün yolları Hong Kong'da kesişir ve Snowden skandala ait gizli belgeleri kameralar kayıttayken gazetecilere teslim eder. Snowden'ın attığı bir hayli riskli adımın ardından yaşananları takip eden Laura Poitras imzalı belgesel; gerçeklik, gerçekçilik ve mevcut kontrol mekanizmalarına dair derin sorular barındırıyor."
    },

    {
        "id": "107",
        "name": "8 mile",
        "text": "İyi akşamlar Filmden Önce takipçileri bugün anlatacağımız film herkesin tanıdığı dünya yıldızı HipHop Kralı olan Eminemin baş rolde oynadığı oskar ödüllü 8 Mile filmi olacaktır Filmi kısaca özetin geçersek.Yaşadığımız yer önemli değil. Kim olduğumuzun da önemi yok. Hepimizi kuşatan sınırlar var. Kimisi gerçek, kimisi sanal… Bazılarımız bu sınırların içinde gönüllü olarak yaşarız. Bir kısmımız ise sınırlarla çevrili yaşamak zorunda kalır. Ancak bazı insanlar vardır ki, sınırları parçalayıp yok etme ihtiyacı duyar. O sınırların ne kadar korkutucu veya bilinmez olmasının önemi yoktur onlar için… Universal Pictures ile Imagine Entertainment’ın birlikte sunduğu “8 Mil”de (8 Mile) hepimizin yaşam biçimini belirleyen sınırların portresi çizilirken genç bir insanın bu sınırları parçalayıp yok etme cesareti ve gücünü kendisinde bulmasının öyküsü anlatılır."
    },

    {
        "id": "108",
        "name": "Paper Towns",
        "text": "Paper townsla ilgili yaklaşık 1 haftadır araştırmalar yapıyoruz,araştırma derken kitabını okuduk ve filmini izledik.Gerçekten beğendiğimiz bir filmdi.Fakat film kitap kadar geniş değil di.Filmi özet geçersek Quentin'in en büyük hayali; gerçekleşeceğine ihtimal vermese de, fazla ortak noktasının bulunmadığı gizemli bir kızı elde etmek ve onunla birlikte hayallerindeki mutlu hayatı yaşamaktır. Quentin’e göre, Margo adındaki bu gizemli kız hem oldukça havalı hem de gözü yükseklerde olan, yanına yanaşılması zor bir insandır. Genç adamın etrafındaki pek çok insan da dahil olmak üzre hemen hemen herkes tarafından hayranlıkla bakılan, gizemleri seven tez canlı bir maceracıdır. Aslında bütün bu macera, Quentin henüz dokuz yaşındayken, Margo’nun yanlarındaki eve taşınmasıyla başlamıştır. Genç adam daha görür görmez bu kıza tutulmuş olsa da yıllar geçtikçe birbirlerinden farklı çevreler edinmişlerdir. Hayatını mota mot planlı bir biçimde yaşayan Quentin, için bir gecede yaşamı tepeden aşağı değşir, çünkü tam dokuz yıl sonra Margo gelip kendisinden çok önemli bir konuda yardım ister!Yönetmenliğini Jake Schreier'ın üstlendiği filmin kadrosunda Cara Delevingne, Nat Wolff, Halston Sage, Cara Buono, Caitlin Carver gibi isimler yer alıyor. "
    },

    {
        "id": "109",
        "name": "The Wolf of Wall Street ",
        "text": "Merhaba Filmden Önce takipçilerine bugün önereceğimiz film The Wolf Of Wall Street olacaktır kısaca özet geçersek.Jordan Belfort 24 yaşında genç ve hırslı bir adamdır. Para kazanma arzusuyla Wall Street borsasında önce komisyoncu ve ardından Stratton Oakmont adında bir yatırımcı firmasında zengin olmak için her şeyi yapmaya hazır bir CEO olur. 90'ların en hızlı günleridir ve New York işlem salonunda her şey olabilmektedir. Önemsiz tahvillerle birçok yatırımcıyı aldatarak, Belfort kısa zamanda bir para makinasına ve aynı zamanda bir harcama makinasına dönüşür. Bir günde hesapları milyon dolarlarla doldururken o gece hepsini aynı hızda harcayabilir. Profesyonel hayatının yanı sıra uyuşturucu, fahişeler, son derece pahalı lüks fantezilerle dolu kirli bir oyunun içindedir. Bu karakterin hayatındaki her şey abartılı bir şekilde devam ederken, çöküş ise çok uzakta değildir... Yönetmenliğini Martin Scorcese'nin üstlendiği film Amerikan borsasında komisyoncu olan Jordan Belfort'un biyografisinin bir uyarlaması. Filmin başrolünde Leonardo DiCaprio yer alırken kadroda Jonah Hill, Kyle Chandler ve Jean Dujardin kendisine eşlik ediyor."
    },

    {
        "id": "110",
        "name": "Marthian",
        "text": "Astronotlar mars gezegenine bir görev için gönderilir. Bölgede meydana gelen fırtına neticesinde astronotlardan Mark Watney ekipten ayrı düşer. Arkadaşları tarafından bir süre arandıktan sonra öldü sanılan Watney’i bulmadan uzay gemilerine binerler. Aslında Watney ölmemiştir ve marsta tek başına yaşam mücadelesi vermek zorunda kalmıştır. Kendisi yaşamaktan oldukça zevk almasından dolayı burada canı pek sıkılmaz. Bulduğu bir kaç alet yardımı ile dünyaya milyonlarca kilometre uzaktan sinyal göndermeye çalışır. Durumu fark eden Nasa, astronotu kurtarmak için çabalarken diğer yandan ekip arkadaşları da önemli bir karar vermek zorunda kalacaklardır. İngilizce adıyla The Martian filminin ana karakterini Matt Damon’ın canlandırdığını söylemeden geçmemek gerekiyor."
    },

    {
        "id": "111",
        "name": "Dough",
        "text": "İnternetde film araken tesadüfen bulduğum bir filmden bahs edicez bu gün.Basit ama ilgin bir film.İsmi-Dough.Yani hamur evet yanlış okumadınız.Artık fırınını döndürmekte zorlanan Nat, yanına Ayyash adında bir çocuğu çırak olarak işe alır. İyiden iyiye düşen satışlar, Ayyash'ın hamurun içine yanlışlıkla düşürdüğü madde sayesinde patlayacaktır.Filmde Jonathan Pryce da yer almakta."
    },

    {
        "id": "112",
        "name": "Kuzuların Sessizliği",
        "text": "Merhaba Filmden Önce nin film sever takipçileri bu akşam size önereceğimiz Kuzuların Sessizliği(The Slience Of The Lambs), yazar Thomas Harris'in aynı adlı romanından beyaz perdeye aktarılan, yönetmenliğini Jonathan Demme'nin yaptığı, 1991 yapımı psikolojik gerilim türünde bir film. Diğer bir çok film gibi ani ses efektleriyle izleyici korkutma yerine gerçekten bir gerilim yaşatan mükemmel bir şaheser. Filmin kısa özetini geçecek olursak.Akademiyi başarıyla bitirmiş olan Clarice Starling artık genç bir FBI ajanıdır.Clarice, sapık bir katilin peşindedir.Katilin elinde bulunan bir kadını kurtarmaya çalışmaktadır.Bu katil, kurbanlarının derilerini yüzebilecek kadar psikopat bir sapıktır.Clarice, bu sapığa ulaşma amacıyla, bir başka psikopat olan ünlü Doktor Hannibal Lecter ile yakınlaşmak gerektiği yönünde bir plan yapar.Fakat, Clarice’in Lecter’dan alacağı bilgiler güvenini kazanmasına bağlıdır. Film, 1992 yılında 7 dalda Oscar’a aday oldu ve en iyi film ve en iyi senaryo uyarlaması dalında ödüle layık görüldü.Bu başarılı yapım, Hannibal Lecter serisinin 1.filmidir ve seride dört film daha yer almaktadır.Serinin diğer filmleri; The Silence of The Lambs(1991), Hannibal(2001), Red Dragon(2002), Hannibal Rising(2007) şeklinde sıralanmaktadır."
    },

    {
        "id": "113",
        "name": "I Origins",
        "text": "Merhaba Filmden Önce nin bay ve bayan takipçileri bugün size paylaşacağımız film.Son yılların en iyi filmlerinden olan.Bunu paylaşan admin e de izledikden sonra büyük boşluklar bırakan ve hayatı sorgulatan bir film olacaktır Film herkese hitap edecek bir türden bir film değil  Reenkarnasyona ilginiz varsa ve farklı filmlerden hoşlanıyorsanız beğenebilirsiniz. Filmi konusun kısaca özet geçersek.Another Earth filminin senaristi ve yönetmeni Mike Cahill kariyerinin üçüncü filmi I Origins(Kök) ile Sundance te yerini alacak ve ödül için yarışacak. Film, moleküler biyoloji alanında çalışan bir adamla onun partnerinin laboratuvarlarında toplumu değiştirecek bir buluşa imzalarını atmaya çalışmalarını anlatacak ve görünüşe göre dinle bilimi karşı karşıya getirecek."
    },

    {
        "id": "114",
        "name": "Karate Kid",
        "text": "Merhaba Filmden Önce takipçileri.Bu gün değerli izleyicimiz @banusnow önerisiyle Karate Kid filmini inceledik.Öncelikle şunu söyliyeyim ki , bu film bizi çocukluğumuza götürdü sene 2007-2008 gibi falan tabii o zaman cinema da yoktu mecburen televizyon izliyorduk.Ve 1984 yapımı olan bu film ilk o zaman karşımıza çıkmıştı.Filmde Pat Morita,Ralph George Macchio gibi ünlü oyuncular yer almakta.Büdcesi 8 milyon, hasilatı 90.8 miliondur.Karate Kid 1984 izlemek isteyenlere konusu kısaca şöyle; Daniel ve annesi evlerinden taşınarak California’da yaşamaya başlarlar. Maddi durumları çok da iyi değildir. Yeni başladığı okulda popüler Ali Mills ile arkadaş olur. Ali, zengin bir kızdır ve bir süredir dövüş okulu öğrencilerinden biriyle çıkmaktadır.Daniel, dövüş okulu öğrencilerinin, pek çok kez fiziksel şiddetine maruz kalır. Onlardan birinde Bay Miyagi Daniel’i kurtarır. Daniel’in ısrarı ile karate çalışmaları başlar. Ama Daniel umduğu gibi hemen dövüşmeye başlayamayacak yerleri cilalayıp, çitleri boyayacaktır. Karate Kid izlenebilir nitelikte bir film olarak karşımıza çıkıyor. Ayrıca 2010 ci yılda Karate kid 2 vizyona çıkmıştır * IMDB Puanı - 7.8 Oyuncular - Ralph Macchio ve Pat Morita * Tür - Aksiyon Filmleri, Boxset Filmler, Dövüş Filmleri, Tavsiye Edilen Filmler* Yapım Yılı - ABD, Japonya"
    },

    {
        "id": "115",
        "name": "Back to the future",
        "text": "Filmden Önce takipçilerine iyi akşamlar.Bu gün sizlere Back to the Future(Geleceğe Dönüş) filmini tavsiye edeceğiz kısaca özet geçersek.Deli dolu bilimadamı Dr. Brown zamanda yolculuğu mümkün kılan bir araba geliştirir. Bu makineyi ilk kullanan genç Marty ufak bir zamanlama yanlışıyla gelecek yerine geçmişe gönderilir. Otuz yıl öncesine dönen Marty’nin burada yaptığı bir hamle, kendi kaderini ilginç bir noktaya sürükleyebilecek bir hataya sebebiyet verir. Artık Marty’nin yapması gereken tek şey kendi doğumunu bile engelleyecek bu hatayı bir şekilde düzeltmeye çalışmak olacaktır. Zamanda yolculuk temalı filmlerin atalarından olan ‘Geleceğe Dönüş’ hem yönetmeni Robert Zemeckis’in hem de dönem sinemasının şahlandığı anlardan biridir. Gösterime girdiği dönem insanlığını bir hayli heyecanlandıran ve kısa bir süre sonra kült mertebesine erişmiş, o güne kadar hep tv dizilerinde yer alan başrol oyuncusu Michael J. Fox'a da büyük ün getirmiştir.Gelmiş geçmiş en iyi komedi bilimkurgu filmi desem herhalde yanlış olmaz.Klasikler arasına kült filmler arasına çoktan kendine yer edinmiş, zamanının çok çok ötesinde bu muhteşem filmi hala seyretmeyen var mıdır acaba merak ediyorum doğrusu."
    },

    {
        "id": "116",
        "name": "The Girl Gone",
        "text": "Filmden Önce takipçilerine bu gün önereceğimiz film Gerilimin nirvanası olan Gone Girl(Kayıp Kız) filmi. Kısaca özet geçecek olursak Amerika'nın Missouri eyaletlerinden birinde sıcak bir yaz sabahı, Nick ve Amy evliliklerinin beşinci yıl dönümünü kutlamaya hazırlanmaktadırlar. Fakat o gün Amy aniden ortadan kaybolur. Geri dönmeyince, polisin gözünde kocası Nick tüm şüpheleri üzerine çeker. Nick'in ise kafası karışmıştır zira Amy'ye ne olduğuna dair hiçbir fikri yoktur ama bir anda kendisini Amy'nin ailesinin haızlradığı bir yardım operasyonu içerisind epiyon olarak bulur! Nick masum olduğu konusunda ısrar etse de üstündeki şüpheleri tamamen yok edemez. Amy'nin hayatta olup olmadığı ise büyük bir muammadır.. Yapımcılarından birinin güzel oyuncu Reese Witherspoon olduğu filmin yönetmen koltuğunda David Fincher oturuyor. Başrollerde ise Ben Affleck ve Rosamund Pike bulunuyor.İMDb: 8.1"
    },

    {
        "id": "117",
        "name": "Contact",
        "text": "Filmden Önce takipçilerine iyi akşamlar.Film tavsiyemizde bugün Harika insan Carl Sagan'ın ünlü başyapıtı ve mükemmel bir bilim kurgu romanı olan Contact(Mesaj) filmi var.Kısaca film konusun anlatacak olursak. Astronom Dr. Arroway, Bir gece Vega yıldızından gelen bir sinyal keşfeder. Arroway'in bu keşfi bütün Amerika'yı ayağa kaldıracaktır. İşin daha da tuhaf olan tarafı, Vega yıldızından gelen bu sinyaller birleştirildiğinde bir teknolojik aracın yapım planı ortaya çıkmaktadır. Bu bir truva atı mıdır? yoksa başka gezegen ve galaksilere seyahatin yolunu açan bir makine midir? Bunu öğrenmek için Amerikan Hükümeti makineyi yapmaya karar verir."
    },

    {
        "id": "118",
        "name": "The life of David gale",
        "text": "Merhaba arkadaşlar bu akşam size Kevin Spacey in başyapıtlarından olan The Life of Gale(Ölümle yaşam arasında) filmini kesinlikle izlemenizi öneriyoruz.Kısaca konusun anlatacak olursak David Gale ölüm cezası karşıtlarının en önemli isimlerinden biridir ve idam cezasının kaldırılması için büyük çaba sarf etmektedir. Kendisi gibi idama karşı çıkan Constance Harraway adındaki bayan tecavüze uğramış ve vahşice öldürülmüştür ancak bu trajik olayın acı tarafı ise, suçun David`in üzerine kalmasıdır. Gazeteci Elizabeth Bloom ile çok özel bir röportaj yapmayı kabul eden David ona olayı açıkça anlatır. Çok iyi bir haber yakaladığının farkında olan Bloom onun anlattıklarını dinledikçe olayın başka boyutlarını da öğrenir. Bu adamın hayatı onun ellerindedir ve bu masum adamı kurtarmak için hemen harekete geçer David Gale’in idamına çok az zaman kalmıştır."
    },

    {
        "id": "119",
        "name": "The Usual Suspect",
        "text": "Merhaba arkadaşlar bugün Filmdenonce ekibi olarak, size Sinema tarihinin en zeki filmlerinden biri olan The Usual Suspects(Olağan Şüpheliler) filmini öneriyoruz.Kevin Spacey ve Gabriel Bryne başta olmak üzere müthiş bir performans sergileyen bu filmde Bir birinden yetenekli ve kendi alanlarında uzman sabıkalı, basit bir kaçırma olayından sonra gözaltına alındıklarında hiçbiri olaya bir anlam veremeden boş gözlerle bir birine bakmaktadır.Hikayeyi araştıran ajan David Kujan Kaliforniya San Pedro Limanı'da 27 kişinin ölümü ile sonuçlanan gizemli patlama ile beş kişinin bağlantısı olduğunu varsaymaktadır.Konusunu uzun-uzun bahsetmek isterdik ama nasılsa ilk izlediğiniz seferde film bitip de siz koltukta,suratınızda aptal bir gülümseme ile kala kaldığınızda anlattığımız her şeyi unutmuş olacaksınız."
    },

    {
        "id": "120",
        "name": "Dag",
        "text": "Merhaba Film severler bu gun soz verdigimiz ama yaklasik 1-2 aydir yapamadigimiz bir listeden bir film onericez.Son zamanlar askeri filmlerin artishinin sahidiyiz.Soz,Savasci bunlara numunedir,simdi gelin en basha firtinanin kopdugu yere gidelim.Dag filmi bize hem guzel hissler yasatdi hemde coook ama cook iyi ishlenmish bir film oldu Turk sinema tarihinde bir yol acdida die biliriz.Insanlar bu filmi izledikden sonra iclerinde bi vatanseverlik uyaniyor.Filmin konusuna girmic supriz kalsin.Bence izleyin ya bu filmi"
    },

    {
        "id": "121",
        "name": "Mr.Robot",
        "text": "Merhaba arkadaslar dun size bir hacker filmi onermisdik simdi bi yabanci dizi onericez ayni konu uzerinde ama cok farkli ve acayip bir dizi, 1 ci sezonu bitirdik ve baya hosumuza gitdi bakmayanlar varsa bakmaya baslasalar iyi olur. iyi seyirler "
    },

    {
        "id": "122",
        "name": "Who am i?",
        "text": "FOTOĞRAFDA GÖRDÜĞÜNÜZ KİŞİ KİM? Oda kendine onu soruyo BEN KİMİM?? Alman yapı olan hacker ve siber güvenlikle ilgili belkide en iyi yapım olan bir filmden bahs ediyoruz.imdb puan 7nin üzerinde olan bu yapımı biz sevdik beğendik açıkcası.Konusu Benjamin genç bir bilgisahar dahisidir. Yalnızca Almanya’da değil tüm dünyada fenomen olmayı hayal etmektedir.. Bir underground hacker grubu, Benjamin’i kadrolarına almayı düşünmektedir. Bu tehlikeli daveti alacak olan benjamin teklife sıcak bakacaktır fakat bu oyunlarda başına ne işler açacağını bilmemektedir."
    },

    {
        "id": "123",
        "name": "Kotu Cocuk",
        "text": "Size bu gun aslinda bizim sevmedigimiz bir turden film onericez .Kotu cocuk,hayir hayir kotu cocuk pez... deil o bu deil yani .Evet filmi ozet gecelim Kayla doğduğu gün babası tarafından terk edilmiş, yaşamı boyunca annesi tarafından büyütülmüş ve artık lise çağında bir genç kızdır. Ancak kendisini terk eden babasının aniden ortaya çıkmasıyla hayatı değişir. Kayla, on yedi yaşına girdiğinde, ilk kez gördüğü babasıyla, yabancı bir şehre taşınır.  Bu yeni şehirde, İstanbul'da, bir yandan babasıyla yaşama zorluğu çekerken bir yandan da yeni bir okula alışması gerekecektir. Fakat daha okulun ilk gününde hiç beklemediği birisiyle, gizemli Meriç ile tanışır.  Kayla'nın hayatı sırlarla dolu Meriç'in peşinden gittikçe iyice karışacaktır.. Yönetmenliğini Yağız Alp Akaydın'ın üstlendiği film, Büşra Küçük'ün yazdığı çok satan ve internet üzerinden 100 milyondan fazla okunan seri Kötü Çocuk'un beyazperde uyarlamas. Filmin başrollerini Tolga Sarıtaş ve Afra Saraçoğlu beraber üstleniyor. Boyle romantik siradan bi film ishte oyle ilgimizi malesef cekmedi ama umarim sizin ilginizi ceker iyi "
    },

    {
        "id": "124",
        "name": "Maymunlar cehennemi",
        "text": "Cesaar 🙄😄tabiiki Romadakı cesardan bahs etmiyoruz,Ama Romadakı Cesar kadar ünlü ve müdrik olan karakterimiz bir maymun 3 bölümden ibaret olan Maymunlar cehenemmi.İsmindende göründüğü gibi cehennemi izliyceksiniz.iyi seyirler "
    },
    {
        "id": "125",
        "name": "King Arthur",
        "text": "Fotorafdan da gordugunuz gibi kimsesizlikden gelerek bir kral olan bir adamin hikayesi bu.Eski Ingiltere tarihi boyunca bununla ilgili bir cok film cekildi.Bu derken Kral Arthurdan bahs ediyoruz . Imdb puani 6.9 olan bu filmi biz beyendik .Ozelliklede muzikleri harika.Tarihi ve heyecan havasi katan muziklerini siddetle oneririz .2017 yapimi ve yonetmenligini Guy Ritchie ustlenmish bu film Marvel Cinematic Universe benzeri sekilde Krat Arthur karakterlerinin ayri maceralarini anlatacak yeni br film serisinin ilk filmi olma ozelligini tasimaktadir. @charliehunnamofficial , @davidbeckham gibi unluler filmde yer almaktadir.Iyi seyirler dileriz"
    },
    {
        "id": "126",
        "name": " Paranormal Aktiviti",
        "text": "Oncelikle hos bulduk uzun zamandir yoktuk ve basimiza kotu olaylar geldi.Kotu olaylari sonra konusuruz izleriyicilerimizden biri Paranormal activityle ilgilendigini soyledi bizde korkub filmlerini izlemedigimiz icin pek bir bilgimiz yok.Ama yinede internetde bir arastirma yaptik fragmani izledik acikcasi her zamanki gibi sevmedik yinede korku filmi seven biriyseniz denemeye deger bir filmdir.Filmin konusu Genç bir çift evlerinde garip bir gücün varlığından şüphelenmeye başlıyor ve evlerini kamera sistemiyle donatıyor. İşte paranormal activity bu kameralara yansıyan görüntülerden oluşuyor sadece.Yapımcılar, bu gecikme sayesinde hem serinin 36. yaşını kutlama hem de gösterim tarihini ayın 13’üne ve cuma gününe denk getirebilme avantajı yakalamış olacaklar.Paranormal Aktivite serisinin 6. halkası ise 13 Ekim tarihinde izleyiciyle buluşacak. Paranormal Activity: The Ghost Dimension adını taşıyan yeni film, Cadılar Bayramı öncesinde sinemaseverlerle buluşacak olan filmin yönetmenliğiniyse Gregory Plotkin üstleniyor. Bütçesi 15.000 dolar olup 108milyon dolar kazanan bir filmdir "
    },
    {
        "id": "127",
        "name": "Delibal",
        "text": "Dün Ay yapımı olan bir film izledik.İzledikten çok beğendik.Filme aslında önyargılı yanaşıyorduk.Film 2 yıl önce vizyona sunuldu ve biz şuan izliyoruz.Ön yargımızı makul görün türk sinema dünyasında aslında son zamanlarda başarılı bir film olmadı fakat Delibalı biz çok beyendik imdb puanı 6.9 hadi 7 diyelim bu çok iyi bir rakam .Filmle ilgili konuşmak gerekirse @cagatayulusoy yine harika oyunculuğunu sergilemiş.Oyuncu Medcezir,İçerde gibi dizilerin baş rölünü oynamış bundan ilave Cagatay Ulusoyun @netflixturkiye ile 2018 yılında bir projesi var.Onunla ilgili bir post paylaşmıştık eğer isterseniz aşağılarda bir yerde olucak.Konudan çok saptık geçelim filme film modern hayatın zorlukları,mutlulukları ve aşkı güzel aşılamış.Fazla spoiler vermeyelim iyi seyirler "
    },
    {
        "id": "128",
        "name": "Logan",
        "text": "Dc-le iligili filmler paylaştık.Bu gün Marvel filmi var listemizde.Marvel bir çok başarılı işlere imza atdı ve bu gün o filmlerden biriyle ilgili konuşucaz.Logan bir kahraman filminden daha öte bir film duygusal bir film.Film izleyicilerini be bizide çok etkiledi.Film yeni hikayenin başlanqıcı olarak odaklandı.Filmle ilgili fazla spoiler vermek istemeyiz.Logan: Wolverine, James Mangoldtarafından yönetilen ve Marvel Comics'in kurgusal karakteri Wolverine'den uyarlanan 2017 yapımı Amerikan süper kahraman filmi. X-Men film serisinin onuncu ve Wolverine karakterinin üçüncü ve son filmi olarak tasarlandı.Film Mark Millar ve Steve McNiven tarafından üretilen İhtiyar Logan'dan esinlendi.Filmin senaryosu yönetmen Mangold'un hikayesinden Scott Frank ve Michael Green tarafından yazıldı. Filmin başrolünde Hugh Jackman yer alırken, Patrick Stewart, Richard E. Grant, Boyd Holbrook, Stephen Merchant ve Dafne Keen yardımcı rollerde yer aldı. Filmin temel çekimleri 2 Mayıs 2016'da Louisiana'da başladı ve 19 Ağustos 2016'da New Mexico'da sona erdi. Logan galasını 67. Berlin Uluslararası Film Festivali'nde yaptı ve 3 Mart 2017'de ABD'de gösterime girdi.İyi seyirler"
    },
    {
        "id": "129",
        "name": "Into the Wild",
        "text": "Macera, özgürlük,doğa dolu bir film düşünün hayatınızı istediğiniz gibi yaşamayı düşünün evet size bir filmi andırıyor doğru İnto the wild.Into the Wild, Jon Krakauer'ın 1996 yılında yayımlanan ve Christopher McCandless adındaki bir gencin maceraları hakkında, filmle aynı ada sahip, kurgusal olmayan bir kitabından uyarlanmış, 2007 yapımı sinema filmi. Türkçede Özgürlük Yolu olarak da bilinen filmin ve uyarlandığı kitabın orijinal İngilizce adı Vahşi Doğaya Doğru anlamına gelir ve adını eserin başlarındaki I now walk into the wild (Şimdi vahşi doğaya doğru yürüyorum) cümlesinden alır.Sean Penn'in yönetmenliğini ve yapımcılığını yaptığı filmin oyuncu kadrosunda Emile Hirsch, Vince Vaughn ve Catherine Keener yer alır. Film, En İyi Kurgu ve En İyi Yardımcı Erkek Oyuncu (Hal Holbrook) dalında Oscar'a aday gösterilmiştir. Amerikan Film Enstitüsünce hazırlanan 2007 yılının Amerikan filmleri listesinde "
    },

    {
        "id": "130",
        "name": "The Lord Of the rings",
        "text": "Yıl 2001 16 yıl geçmiş düşünün size 16 yıllık bir efsaneni anlatıcaz imdb puanı tavanlara fırlamış 9.1/10 efsane bir orta çağ filmi .Yüzüklerin efendisi.3 filmden oluşan sizi başka dünyaya aparıcak olan bu film izlemelisiniz.Yüzüklerin Efendisi (İng. The Lord of the Rings) İngiliz filolojist ve Oxford Üniversitesi profesörü J. R. R. Tolkien'in yazdığı epik fantezi türündeki romandır. Hikâye Tolkien'in çocuklar için yazdığı 1937 tarihli Hobbit'in devamı olarak başlamıştı ancak sonunda ondan çok daha büyük bir eser haline geldi. Çoğu II. Dünya Savaşı'nda olmak üzere 1937 ve 1949 yılları arasında aşamalar halinde yazıldı. 150 milyonun üstündeki satış sayısıyla tüm zamanların en çok satan ikinci romanıdır. İşte falan filan film çok güzel eyer severseniz filmle ilgili daha bir post paylaşmayı düşünüyoruz ."
    },
    {
        "id": "131",
        "name": "Dark Night",
        "text": "Filmden Önce takipçileri bu gün bir kaç post paylaşdık izleyicilerimizin neden ilgisiz yanaşdığını bilmiyoruz içeriğimizmi hoşunuza gitmiyor? bizimle ilgili hoşunuza gitmeyen düşünceleriniz varsa buyurun yorumlarda bölüşün.Kara Şövalye (Özgün adı: The Dark Knight), Christopher Nolan'ın yönettiği bir süper kahraman filmidir. DC Comics'in kurgusal karakteri Batman'den uyarlanan 2005 tarihli Batman Başlıyor (Batman Begins) filminin devamıdır. Kara Şövalye'nin senaryosunu Christopher ve kardeşi Jonathan Nolan yazmıştır. Hikâyeyi ise David S. Goyer oluşturmuştur. Filmin olay örgüsü, Bruce Wayne/Batman (Christian Bale), bölge savcısı Harvey Dent (Aaron Eckhart), asistan Rachel Dawes (Maggie Gyllenhaal) ve Polis Komiseri James Gordon'ın (Gary Oldman), onların suçla mücadelelerinin ve yeni tehdit Joker'in (Heath Ledger) etrafında gelişir. Joker gerçek kimliği, filmin gizemi için saklı tutulur ve Harvey Dent'in kahraman bir bölge savcısından çirkin bir katile dönüşümünün hikâyesi tamamıyla anlatılır. Yönetmen Nolan, Joker karakteri için ilhamı, onun 1940'lar ilk kez göründüğü çizgi romanlardan ve Harvey Dent'in geçmişinin tekrar anlatıldığı 1996 tarihli Batman: The Long Halloween adlı çizgi romandan esinlendi.[2] Kara Şövalye'nin çekimleri öncelikle Chicago'da, ek olarak da Birleşik Devletler'in birkaç yerinde, Birleşik Krallık'ta ve Hong Kong'da yapıldı. Nolan, Joker'in filmde ilk göründüğü sahne başta olmak üzere bazı sekansları çekmek için IMAX kamerası kullandı. Kamyon devirme sahnesinde görsel efekt kullanılmadı. Filmin müziklerini oluşturmada Hans Zimmer ve James Newton Howard işbirliği yaptı."
    },
    {
        "id": "132",
        "name": "Vendetta",
        "text": "Kan,İntikam,Ateş ve Ölüm evet evet V for Vendettadan bahs ediyoruz imdb puanı 8.2 olan izleyicini önünden ayrılmadığı 5 kere verseler 5 kere izleriz türünden olan bu film 2005 yılında seyircilere sunulmuştur.V for Vendetta, 2005 yılı ABD - Almanya ortak yapımı olup 2006'da gösterime giren film. Wachowski kardeşlerin sinemaya uyarlayıp yapımcılığını üstlendiği filmi, daha önce Matrix üçlemesinde yardımcı yönetmenlik yapan James McTeigue yönetti. V for Vendetta, Alan Moore'un yazıp David Lloyd'un çizdiği DC in yayınladığı aynı isimli çizgi romandan beyaz perdeye uyarlandı.Filmin başrollerini Hugo Weaving (V) ve Natalie Portman (Evey Hammond) paylaşır. Hikâye; geleceğin İngiltere'sinde (2020) geçmektedir. Diktatör bir rejime bireysel bir başkaldırının nasıl toplumsal hale geldiğini gösterir. Ağustos 2006 itibarıyla V for Vendetta ABD'de 70,511,035 $ gişe yapmış; uluslararası olarak 60,900,000 $ hasılat ile toplam kazancı 131,411,035 $'a ulaşmıştır. Film ABD'de gösterime girdiği gün 8,742,504 $, ilk hafta 25,642,340 $ gelir elde etmiştir.Bu rakamlarok yüksek diyorsanız bide filmi izleyin . "

    },
    {
        "id": "133",
        "name": "Wonder Woman",
        "text": "Merhaba Filmden Önce takipçileri bu gün sizlere Dc yapımı olan bir süper kahraman filmi öneriyoruz.Wonder Woman, aynı adlı DC Comicskarakterinden uyarlanan 2017 yapımı Amerikan süper kahraman filmi. DC Extended Universe'in dördüncü yapımı olarak tasarlandı. Film Patty Jenkinstarafından yönetilirken senaryo Jason Fuchs tarafından yazıldı. Filmde Gal Gadot, Chris Pine, Connie Nielsen, Lucy Davis, Robin Wright, Lisa Loven Kongsli, Danny Huston, Elena Anaya ve David Thewlis oynamaktadır. Temel çekimler Kasım 2015'in sonlarında başladı. Film 2 Haziran 2017'de yayınlanmak üzere ayarlandı.Biz izledik ve çok beyendik ayrıca minik bir spoiler verelim wonder woman justice league ile ilgili.Dc böyle işler yapmaya devam etse iyi olur gelicek senelerde Aquaman vizyona giricek bundan ilave 2 joker filmi bekleniyor.Bu joker filmlerden biri Jared Leto ve Harley Quinn diğeri Jokerin solo filmi neyse :D fazla konuşmadan filme geçelim iyi seyirler . "

    },
    {
        "id": "134",
        "name": "Once",
        "text": "Merhaba Filmden Önce takipçileri bir kaç gündür ortalıkta yoktuk ve uzun zamandır film önermiyoruz. Bu gün Once (İngilizcede Bir Kere), yönetmenliğini ve senaristliğini John Carney'in üstlendiği müzikal romantik dram türündeki 2007 yapımı İrlanda filmi. Başlıca rollerini Glen Hansard ile Markéta Irglová'nın paylaştığı film, Dublin'de sokak müzisyenliği yapan biriyle karşılaşan göçmen bir kızın birlikte çalışarak bir albüm çıkarma sürecini konu almaktadır. "

    },
    {
        "id": "135",
        "name": "Pianist",
        "text": "Merhaba Filmden Önce takipçileri 2 gündür blog yazamiyoruz sebebi FilmdeÖnce sitesini hazirlıyoruz lütfen sizde destek çıkın yorumlarda instagram sayfamızı eklicez izlerseniz seviniriz.Bu gün size önereceğimiz film drama türünde 2002 yılında çekilmiş yönetmenliğini Roman Polanski'nin yaptığı, senaryosunu Ronald Harwood'ın, Wladyslaw Szpilman'ın hayatını anlattığı kitabın üzerine kurduğu Fransa-Almanya-Polonya ortak yapımı filmdir.Konusu Wladyslaw Szpilman, Polonyalı başarılı bir piyanisttir. II. Dünya Savaşı'nda Almanların Polonya'yı işgal etmesiyle hayatı kâbusa döner. Yahudi olduğu halde şans eseri toplama kamplarına gitmekten kurtulur ve Varşova'nın varoşlarında yaşamaya başlar. Daha sonra Wilm Hosenfeld isimli bir Alman subayının yardımıyla hayatta kalmayı başarır.Savaşın gerçek yüzünü gösteren bir çok ödül almış,imdb puanı 8.5/10 olan biz beyendik."

    },
    {
        "id": "136",
        "name": "Predestination",
        "text": "Merhaba Filmden Önce takipçileri.İntouchables filmi baya biri ilgi çekti ve iyi bir destek geldi bu durum bizi gerçekten sevindirdi ve bu güne özel bir bilim kurgu filmi öneriyoruz.2014 -de vizyona giren Avustralya yapımı olan Predestination ( Alın Yazısı) Michael ve Peter Spierig kardeşler tarafından yazılıp, yönetilmiştir.Filmde Ethan Hawke, Sarah Snook ve Noah Taylor gibi isimler yer almakta.İMDb -7.5 olan bu filmi umariz izlersiniz :) .Film o kadar karmaşık ve güzelki fazla konuşupta spoiler vermek istemedik .Hadi o zaman mısırınızı patlatın ve bu filmi izleyin iyi seyirler :) ."


    },
    {
        "id": "137",
        "name": "Intouchables",
        "text": "Merhaba filmden önce takipçileri.2 gündür paylaşım yapamıyoruz sebep ise Filmden Önce ekibinin bir sitesini hazırlamak.Ama sizin için zaman buluruz.Bu gün sizlere arkadaşlığı anlatan bir filmi öneriyoruz.Intouchables (Can Dostum) fransız yapımı olan bir film bizi çok duygulandırdı aynı zamanda neşelendirdi.Film fransada çok mehşur aynı zamanda bir çok ödüller aldı.Çıktığı tarihinden dokuz hafta sonra ülke tarihinde en çok seyirci sayısına ulaşan film oldu. César Ödülünde 8 dalda aday göstterilmiş ve filmdeki Omar Sy En İyi Erkek Oyuncu Ödülü'nün sahibi olmuş.Bütçe -$9.500.000 ve"
    },
    {
        "id": "138",
        "name": "The Way Back",
        "text": "Merhaba Filmden Önce takipçileri.Postlarımızın gece paylaştığımızın farkındayız fakat bu size hazırladığımız sürpriz için zaman alıyor.Neyse konuya dönelim bu gün sizlere The Way Back (Özgürlük yolu) aksiyon ve drama içeren bir filmdir.Film Sovyet Rusya'da bulunan Polonyalı Sławomir Rawicz'in 'The Long Walk' isimli kitabından uyarlanmıştır.Özgürlükleri için mücadele eden bir grup insanı konu alıyor.Ayrıca film geçtiğimiz Oscar ödüllerinde En İyi Makyaj dalında aday gösterilmişti.Yönetmenliğini Peter Weir -in üstlendiği bu filmi izlemenizi tavsiye ederiz.."
    },
    {
        "id": "139",
        "name": "Whiplash",
        "text": "Merhaba Filmden Önce izleyicileri.Sıcak yaz sizi çok yorduğunu biliyoruz o yüzden keyfinizin yerine gelmesi için bir film önerelim dedik.Whiplash 2014 -de vizyona girmiş bir Amerikan drama filmi.Damien Chazelle tarafından yönetilen bu filmde Milles Tyler ve J.K.Simmons rol alıyor.Whiplash iyi bir film adeta motivasyon filmlerinden biri gibi bilinir.Sonunu pek beklediğimiz gibi olmasada yinede iyi bir tarzı var.Bizim puanımız whiplasha 8 . iyi seyirler :) ."
    },
    {
        "id": "140",
        "name": "Edge of Tomorrow",
        "text": "Merhabalar Filmden Önce takipçileri.2 gündür blog paylaşmamızın sebebi yurtdışında olmamızdır.Bu gün sizlere şu sıcak yaz gününde klimanın karşısında keyifle izleyeceğiniz bir filmi öneriyoruz.Edge of Tomorrow (Yarının Sınırında) bir bilim kurgu filmi.Baş rolde Tom Cruise canlandırdığı bu filmin imdb 7,9 -dur.Film Dünya'nın bir yaratık ırkı tarafından saldırıya uğradığı bir gelecekte geçmektedir.Fazla spoiler veripte filmin tadını bozmak istemeyiz.O yüzden size iyi seyirler umarız hoşunuza gider :) ."
    }
        ,
    {
        "id": "141",
        "name": "Captain Fantastic",
        "text": "Merhaba Filmden Önce takipçileri bu gun sabah uyandığımızda ilginç bir olayla karşılaştık.Facebook sebepsiz yere hesabımızı kapatdı.Bu olay ne kadar ilginç olsada bir o kadar üzücüydü o yüzden izleyicilerimize keyifli ve ilginç bir film önerelim dedik.11 kasım 2016-da vizyona giren Captain Fantastic (Kaptan Fantastik) filmi çok ilgimizi çekti.Filmde The Lord of the Rings den Aragorn ismiyle tanınan Viggo Mortensen rol almakta.Viggo dışında Frank Lagella ve George MacKay gibi ünlü oyuncular kadroya dahil.Yönetmenliğini Matt Rossun üstlendiği bu film bol süpriz komedi ve macera dolu dakikalar içerir.Filmden biraz bahs etmek gerekirse Ben Cash, ABD’nin Kuzeybatı Pasifik ormanlarında, 6 çocuğu ile beraber bir kabinde medeniyetten izole bir hayat yaşamaktadır.Ben, kendini çocuklarını büyük bir titizlikle hem fiziksel hem de entelektüel olarak yetiştirmeye adamıştır. Fakat karısı Leslie’nin ölümü ormandaki düzeni de sarsar ve annelerinin cenazesine katılmak için şehre ve medeniyete dönmek isterler.Biz filmi izledik ve gayetde hoşumuza gitti umarız siz de izler ve siz de eğlenirsiniz :) başka filmde görüşmek üzere hoşçakalın :) ."

    },
    {
        "id": "142",
        "name": "The Raid",
        "text": "Merhaba FilmdenÖnce takipçileri.Yeni bir gün ve yeni bir filmle karşınızdayız.Bu gün film köşemizde sizlere bol aksiyonlu bir film seçtik . The Raid (Baskın) filmini öneririz.Yönetmenliğini ve senaristliğini Gareth Huw Evans, yapımcılığını Ario Sagantoro üstlenmiştir.Polisiye ve haydut çetesiyle alakalı olan bu film aksiyon dolu dakikalar yaşatıcak .Çıkış tarihi 8 Eylül 2011 olan bu film imdb puanı 7.6 .Ölüm ve kanın olduğu bu filmin The Raid 2 2014 -cü yılda vizyona çıkmıştır ama pek tavsiyye etmeriz ha siz ilk filmi çok beyendiniz 2ci filmi de izlicem dersiniz o ayrı .Umarız seçdiğimiz film hoşunuza gider.Eğer önerdiğiniz bir film olursa yorumlarda yazmayı unutmayın. :) iyi seyirler ."

    }


    ]
    var apikey = 'cae5303';
    var url = 'http://www.omdbapi.com';

    for (let i = 0; i < movies.length; i++) {
        var t = movies[i].name;
        console.log(i)
        // setTimeout(function(){
            $.ajax({
                url,
                data: {
                    apikey,
                    t
                },
                success: function (result) {
                    if (result) {
                        database.ref("films/").push({
                            name: movies[i].name,
                            review: movies[i].text,
                            duration: result.Runtime,
                            year: result.Year,
                            genre: result.Genre,
                            director: result.Director,
                            actors: result.Actors,
                            boxOffice: result.BoxOffice,
                            poster: result.Poster,
                            country: result.Country
                        })
                    }
                }
            }
            );
        // }, i*3000);
    }
}

doldur();

