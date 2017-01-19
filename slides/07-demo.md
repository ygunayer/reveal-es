## Demo

Note:
Mapping koymak aslında yarı-opsiyonel. Hiç özel bir şey yapmayacaksan mapping koyma ama genelde gerekiyor. Biz özel olarak konfigüre etmesek bile örnek olması açısından elle vereceğiz.  

0. Index oluşturma (Postman)  
1. Tek doküman index'leme  
2. id'de term query  
3. query_string query  
4. Bulk index'leme (index'i yeniden oluşturdukan sonra)  
5. tekrar query_string query  
6. title'da match query (bu noktada elma ile elmalı keyword'lerini aratınca sonuçlar garip çıkacak; elmali hiç çıkmayacak)  
7. bool should query'si ile hem title'da, hem instructions'da match query
