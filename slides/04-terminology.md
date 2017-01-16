## Terminoloji

- **Document:** Saklanan temel veri tipi (bkz. satır)
- **Type:** Dokümanları gruplamak için kullanılan ayraç (bkz: tablo)
- **Mapping:** Dokümanlardaki field'ların nasıl index'leneceğinin yer aldığı kurallar bütünü (bkz: schema definition)
- **Shard:** Altyapısında tek bir Lucene instance yatan, index kayıtlarının saklandığı ve arama algoritmasını çalıştıran iş birimi
- **Index:** İçerisinde type'ları barındıran, istekleri ve dokümanları shard'lara ayırıp bölümlendirmekle yükümlü koordinatörler (bkz: veritabanı)

https://www.elastic.co/guide/en/elasticsearch/reference/2.4/glossary.html

Note:
Shard'lar primary ve replica olarak ikiye ayrılır. Veriler primary'lerde saklanırken kopyaları adı üstünde replica'larda saklanır.  
Yazma işlemi primary'e yapılıp replica'lara dağıldığından replica shard sayısını artırmak aramayı hızlandıracaktır.
