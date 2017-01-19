## Analysis

![Analysis](images/09-analysis.png)

Note:
Analiz aşaması: char_filter -> tokenize -> filter  
Çikolatalı Kek terimi çeşitli analyzer'larla analyze edilecek: sırasıyla whitespace, simple, standard, turkish  
Çoğu zaman bu analyzer'ları direkt olarak kullanmak yetmiyor. Örneğin standard analyzer'ın stop words konfigürasyonunu değiştirmek gerekebiliyor.
