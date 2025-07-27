import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Question from "../pages/Question";
export function AccordionDemo() {
  return (
    <>
      <div className=" w-full bg-[url(/images/bgquestion2.jpg)] bg-cover bg-center bg-no-repeat mb-[70px]">
        <div className=" max-w-[1200px] m-auto py-[70px]">
          <img data-aos="fade-up" data-aos-easing='linear' data-aos-duration='400'  className=" w-[500px] mb-[40px]" src="/logos/zamonshop_logo_clean.png" alt="" />
          <article className=" w-[700px]">
            <h2 data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400' className=" text-[32px] font-bold text-[#0e0e62] mb-[30px]">ZamonShop — Savollar ko‘pmi? Javoblar shu sahifada!</h2>
          <p data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400' className=" text-[18px] font-medium" >
            ZamonShop do‘konida xarid qilayotganingizda sizga kerak bo‘lishi
            mumkin bo‘lgan eng muhim ma'lumotlarni bir joyga to‘pladik.
            Mahsulotlarimiz, yetkazib berish tartibi, qaytarish siyosati va
            boshqa savollar bo‘yicha tez-tez so‘raladigan javoblarni bu yerda
            topishingiz mumkin.
          </p>
          </article>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className=" max-w-[1200px] m-auto "
        defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger> Bu sayt haqiqiy mahsulotlarni sotadimi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
               Yo‘q, bu sayt hozircha faqat test maqsadida yaratilgan. Hozirda bu yerda ko‘rsatilgan mahsulotlar, narxlar va xizmatlar real emas — barchasi taqdimot va amaliyot uchun ishlatilmoqda.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>Saytdagi mahsulotlar qayerdan olinadi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
               Mahsulotlar haqidagi ma’lumotlar internetdagi ochiq manbalar yoki tasodifiy test ma’lumotlar asosida kiritilgan. Hech bir mahsulot aslida mavjud emas, ular dizayn va ishlash sinovlari uchun ishlatilmoqda.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
          value="item-3"
          className=" border rounded-md px-[10px] mb-[10px]"
        >
          <AccordionTrigger>Nega ushbu sayt ochilgan?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Ushbu sayt frontend loyihasi sifatida ishlab chiqilgan bo‘lib, unda foydalanuvchi interfeysi (UI), mahsulot kartalari, savat funksiyasi, responsive dizayn, routing va boshqa texnologiyalar sinovdan o‘tkazilgan
            </p>
            <p>
              Bu — portfoliodagi ish sifatida ishlab chiqilgan loyiha.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>Buyurtma bersam, menga mahsulot keladimi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
               Yo‘q, bu sayt orqali berilgan buyurtmalar haqiqatda bajarilmaydi. Agar siz mahsulot tanlab “Sotib olish” tugmasini bossangiz, bu faqatgina funksional ko‘rinish bo‘lib, real tizimga ulanmagan.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>Saytning backend qismi ishlayaptimi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
               Hozirgi versiyada sayt frontend (old qism) bilan ishlaydi. Agar backend ulansa, buyurtma, foydalanuvchi, to‘lovlar kabi funksiyalar ham test rejimida ishlashi mumkin. Ammo hozircha hech qanday real ma’lumot serverga yuborilmaydi.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>Nega bu saytga "ZamonShop" deb nom qo‘yilgan?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
                “ZamonShop” nomi tasodifiy tanlangan bo‘lib, u zamonaviy onlayn do‘kon kontseptsiyasini ifodalaydi. Bu loyiha o‘rganuvchilar, ish qidirayotgan dasturchilar yoki portfolioda ishlatish uchun mos nom sifatida tanlangan.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger> Mahsulotlarni “yoqtirish”, “savatga qo‘shish”, “filtrlash” funksiyalari nima qiladi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
                Yoqtirish" — mahsulot yurakcha bilan belgilanishini ta’minlaydi.
            </p>
            <p>
              "Savatga qo‘shish" — vaqtincha mahsulotni sahifada saqlab turadi.
            </p>
            <p>
              "Filter" — sahifadagi mahsulotlarni ko‘rish qulayligini oshiradi.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className=" border rounded-md px-[10px] mb-[10px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>  Bu saytni kim yaratgan?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
                Ushbu sayt Shamsiddin Sirojiddinov tomonidan ishlab chiqilgan test va o‘quv loyihasidir. Maqsad — veb-dasturlash bo‘yicha amaliy ko‘nikmalarni mustahkamlash va portfolio uchun zamonaviy onlayn do‘kon maketini yaratishdir.
            </p>
            
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-9"
          className=" border rounded-md px-[10px] mb-[70px]"
          data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400'
        >
          <AccordionTrigger>  Bu sayt kelajakda haqiqiy onlayn do‘konga aylantiriladimi?  </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
                Ehtimol. Hozircha bu loyiha o‘quvchi va tajriba orttirish maqsadida ishlab chiqilgan. Agar backend qismi, real ma’lumotlar va to‘lov tizimi integratsiya qilinsa, uni real do‘kon sifatida ishga tushirish ham mumkin.
            </p>
            
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        <Question />
    </>
  );
}
