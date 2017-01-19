## Daha Fazlası

- fuzziness
- phrase match
- minimum_should_match
- slop

Note:
Fuzziness self-explanatory  
phrase ve minimum_should_match el ele. bu ikisini kullanarak gerçekten phrase arayabilirim  
slop sayesinde phrase yapıp, araya birkaç kelimenin daha girmesine izin verebilirim

Örnek query:
{
    "query": {
        "multi_match": {
            "fields": [
                "title.original^8",
                "title.original_prefix^4",
                "title.folded^2",
                "title.folded_prefix"
            ],
            "type": "phrase_prefix",
            "slop": 100,
            "minimum_should_match": "80%",
            "query": "çilek, çikolata, dondurma"
        }
    }
}
