## n-gram'lar

*"çiko yazınca çikolata önerelim"*

- Bir kelimenin ardışık *n* karakterden oluşan alt kümelerine *n-gram*'ları denir
    - unigram: ç, i, k, o, l, a, t, a
    - bigram: çi, ik, ko, ol, at, ta
    - trigram: çik, iko, kol, ola, lat, ata  
    ...

- Baştan başlamak kaydıyla kelimenin *n* karakter oluşan alt kümelerine ise *edge n-gram*'ları denir
    - çi, çik, çiko, çikol, çikola, çikolat, çikolata

Note:
great mapping'ini kullanarak yeniden index oluşturup demo'ya kullanıyoruz. örnek multi_match için weight'ler:  
"title.original^8", "title.original_prefix^4", "title.folded^2", "title.folded_prefix"
