## Türkçeye Uygun Analyzer

Ne istiyoruz?

- boşluklar ve noktalama işaretleri atılsın
- lowercase
- folding (ç -> c, ı -> i, ş -> s...)

Note:
Bu noktada somewhat.json isimli mapping kullanılarak yeni bir index oluşturulacak. Sonra yine ÇİKOLATALI KEK string'i analiz ettirilecek onun da sonrasında ise rastgele bir dokümanın term vector'leri gösterilecek.  
Her şeyi fold etmek her zaman faydalı olmayabilir. Örneğin unlu <-> ünlü

nice'taykenki amacımız, ünlü ile unlu arasındaki farkı açığa çıkarmak ve orijinali eşleşenleri daha yukarı taşımak. Fakat bu noktada da artık kelime başından eşleştirme gereksinimini hatırlıyoruz.
