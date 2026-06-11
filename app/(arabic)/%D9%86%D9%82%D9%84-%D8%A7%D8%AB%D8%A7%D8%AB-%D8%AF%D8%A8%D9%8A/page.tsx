import heroImage from "@/public/loc/hamad-movers-dubai-professional-moving-team.jpg";
import { Tajawal } from "next/font/google";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTA";
import {
  CheckCircle2,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  BadgePercent,
  PhoneCall,
} from "lucide-react";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";

const tajawalFont = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = MetadataTemplate({
  meta: {
    title: "نقل اثاث دبي | حماد موفرز – أسرع فريق في الإمارات",
    desc: "شركة حماد موفرز لنقل اثاث دبي – خدمات فك، تغليف، نقل وتركيب للشقق والفلل والمكاتب. أسعار منافسة، فريق محترف، وخدمة 24 ساعة. اتصل الآن: 0551165993",
  },
  image: {
    path: "/loc/hamad-movers-dubai-professional-moving-team.jpg",
    alt: "حماد موفرز دبي – فريق نقل أثاث محترف بالزي الرسمي أمام برج سكني حديث",
  },
  path: "/نقل-اثاث-دبي",
});

export default function DubaiMoversPage() {
  return (
    <>
      <main
        className={`w-full  text-foreground ${tajawalFont.className} overflow-hidden`}
        dir="rtl"
      >
        {/* قسم الـ Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* المحتوى النصي للـ Hero */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary w-fit">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                تغطية كاملة لكافة مناطق دبي
              </span>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.25] max-w-2xl">
                شركة نقل اثاث دبي – حماد موفرز | خدمة 24/7 بأسعار تنافسية
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                هل تبحث عن شركة نقل اثاث دبي موثوقة تُنهي المهمة بدون ضغط أو
                مفاجآت؟ فريق حماد موفرز يتولى نقل الاثاث دبي بالكامل نيابةً عنك
                – الفك، التغليف، النقل، وإعادة التركيب – للشقق والفلل والمكاتب
                في جميع أحياء دبي. خدمتنا متاحة 24 ساعة في اليوم طوال أيام
                الأسبوع، وسعرنا واضح من أول محادثة.
              </p>

              {/* أزرار الاتصال الأساسية */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  callBtn
                  size="lg"
                  className="w-full sm:w-auto shadow-md"
                >
                  📞 اتصل الآن: 0551165993
                </Button>
                <Button
                  whatsappBtn
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  💬 تواصل عبر واتساب
                </Button>
              </div>

              {/* مميزات سريعة تحت الـ Hero */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/90">
                    أسعار منافسة بدون رسوم خفية
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/90">
                    فريق محترف ومدرب
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/90">
                    ضمان سلامة الأثاث أثناء النقل
                  </span>
                </div>
              </div>
            </div>

            {/* صورة placeholder للـ Hero مع مراعاة الأبعاد التناسبية */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-3xl bg-muted overflow-hidden border shadow-sm flex items-center justify-center">
                <Image
                  src={heroImage}
                  alt="حماد موفرز دبي – فريق نقل أثاث محترف بالزي الرسمي أمام برج سكني حديث"
                  fill
                  placeholder="blur"
                  loading="eager"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* قسم: لماذا تختار حماد موفرز؟ */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              لماذا تختار حماد موفرز لنقل اثاث في دبي؟
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              شركات نقل الأثاث في دبي كثيرة. الفرق يظهر في التفاصيل – في الطريقة
              التي يتعامل بها الفريق مع أثاثك، في وضوح السعر من أول لحظة، وفي
              الالتزام بالموعد المتفق عليه. لنقل الاثاث بشكل صحيح تحتاج شركة
              تعرف كيف تتعامل مع كل نوع من الأثاث، وليس فقط تحمله من مكان لآخر.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* بطاقة ميزة 1 */}
            <div className="p-8 rounded-2xl bg-card border shadow-xs hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Clock className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                فريق محترف ومدرب على أعلى المعايير
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                عمالنا مدربون على التعامل مع الأثاث الثقيل والإلكترونيات والقطع
                الثمينة. شركة لنقل الاثاث بهذا المستوى من التدريب ليست شائعة في
                السوق. كل فريق متخصص يعمل بخطوات محددة لتجنب أي خدش أو ضرر، مهما
                كانت القطعة.
              </p>
            </div>

            {/* بطاقة ميزة 2 */}
            <div className="p-8 rounded-2xl bg-card border shadow-xs hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Truck className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                سيارات مجهزة وآمنة لنقل العفش والاثاث
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                أسطولنا يضم شاحنات مغلقة بأحجام مختلفة، مجهزة لتقليل الاهتزاز
                أثناء الطريق. سيارات نقل العفش والاثاث لدينا مناسبة لكل حجم، من
                الشقة الصغيرة إلى الفيلا الكاملة.
              </p>
            </div>

            {/* بطاقة ميزة 3 */}
            <div className="p-8 rounded-2xl bg-card border shadow-xs hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                تغليف احترافي بمواد عالية الجودة
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم بلاستيك فقاعي وفوم وصناديق كرتونية متينة. كل قطعة تُرقَّم
                لمعرفة مكانها في البيت الجديد. تغليف اثاث بشكل صحيح هو أول خطوة
                لحماية الاثاث، وهي خطوة نأخذها بجدية كاملة.
              </p>
            </div>

            {/* بطاقة ميزة 4 */}
            <div className="p-8 rounded-2xl bg-card border shadow-xs hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <BadgePercent className="size-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                أسعار تنافسية وشفافة – لا تكاليف خفية
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                تحصل على عرض سعر مجاني قبل أن نبدأ. نقل اثاث رخيص دبي لا يعني
                تنازلاً عن الجودة – أسعار نقل الاثاث عندنا منافسة، والمبلغ
                المتفق عليه هو المبلغ النهائي بدون أي إضافات.
              </p>
            </div>
          </div>
        </section>

        {/* قسم الخدمات الشاملة */}
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                خدمات نقل الاثاث الشاملة في دبي
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                حماد موفرز من بين شركات نقل الاثاث التي تغطي جميع الاحتياجات تحت
                سقف واحد. سواء كانت شقة صغيرة أو مشروع نقل تجاري كامل، عندنا
                الفريق والمعدات المناسبة لكل حالة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* الخدمة 1 */}
              <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/loc/hamad-movers-naql-athath-shaqaq-dubai.jpg"
                    alt="حماد موفرز – خدمة نقل اثاث الشقق في دبي باحتراف"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    نقل اثاث الشقق والمنازل في دبي
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الأكثر طلباً في خدماتنا. نقل اثاث في دبي للشقق يشمل الفك
                    الكامل والتغليف والنقل المنزلي وإعادة التركيب في الوجهة
                    الجديدة. نقل شقة دبي يتم في يوم واحد بدون تعطيل حياتك
                    اليومية.
                  </p>
                </div>
              </div>

              {/* الخدمة 2 */}
              <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/loc/hamad-movers-naql-athath-villa-dubai.jpg"
                    alt="حماد موفرز – نقل اثاث الفلل في دبي بأدوات متخصصة وفريق خبير"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    نقل اثاث الفلل في دبي
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نقل فلل دبي يختلف عن الشقق من حيث الحجم والتعقيد – قطع ضخمة،
                    ستائر، مطابخ مجهزة، أثاث خارجي. فريقنا يتعامل مع نقل أثاث
                    فيلا بأدوات مخصصة وخبرة ميدانية مباشرة.
                  </p>
                </div>
              </div>

              {/* الخدمة 3 */}
              <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/loc/hamad-movers-office-moving-dubai-corporate.jpg"
                    alt="حماد موفرز – نقل مكاتب وشركات في دبي بسرعة واحترافية بدون تعطيل"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    نقل مكاتب وشركات في دبي
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    كل يوم توقف في العمل له تكلفة. نقل مكاتب دبي عندنا يتم بسرعة
                    مع الحفاظ الكامل على المعدات التقنية والمستندات الحساسة. نقل
                    معدات وأجهزة بدون خسائر أو تأخير.
                  </p>
                </div>
              </div>

              {/* الخدمة 4 */}
              <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/loc/hamad-movers-packing-storage-warehouse-dubai.jpg"
                    alt="حماد موفرز – خدمات التغليف والتخزين الآمن في دبي في مستودعات مكيفة"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    خدمات التغليف والتخزين
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    عندنا مستودعات مكيفة للتخزين المؤقت أو الطويل الأمد. خدمة
                    تغليف ونقل اثاث متكاملة من البداية للنهاية، وتخزين اثاث دبي
                    آمن لأي مدة تحتاجها.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم كيف نعمل (خطوات العمل) */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              كيف نعمل؟ – خطوات نقل اثاثك في دبي بسهولة
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              لا تعقيد ولا مفاجآت. هذا ما يحصل من أول مكالمة حتى آخر قطعة أثاث
              تُركَّب في مكانها:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* الخطوة 1 */}
            <div className="flex flex-col items-start bg-card p-6 rounded-2xl border relative">
              <span className="text-5xl font-black text-primary/15 mb-4">
                01
              </span>
              <h3 className="font-bold text-lg mb-2">التواصل وطلب عرض السعر</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                اتصل على 0551165993 أو أرسل واتساب، وستحصل على عرض سعر مجاني
                خلال دقائق. نقل اثاث دبي يبدأ بمكالمة واحدة بسيطة.
              </p>
            </div>

            {/* الخطوة 2 */}
            <div className="flex flex-col items-start bg-card p-6 rounded-2xl border relative">
              <span className="text-5xl font-black text-primary/15 mb-4">
                02
              </span>
              <h3 className="font-bold text-lg mb-2">المعاينة ووضع الخطة</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                يزور الفريق موقعك لتقييم حجم الأثاث وتحديد الشاحنة المناسبة
                وجدولة موعد النقل. شركة نقل اثاث في دبي محترفة لا تقدم سعراً من
                دون معاينة.
              </p>
            </div>

            {/* الخطوة 3 */}
            <div className="flex flex-col items-start bg-card p-6 rounded-2xl border relative">
              <span className="text-5xl font-black text-primary/15 mb-4">
                03
              </span>
              <h3 className="font-bold text-lg mb-2">
                الفك والتغليف الاحترافي
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                نفك الأثاث بعناية ونغلف كل قطعة بمواد حماية مناسبة لنوعها. خدمة
                فك وتركيب ضمن الباقة الأساسية. تغليف اثاث احترافي لكل شيء –
                كبيراً كان أم صغيراً.
              </p>
            </div>

            {/* الخطوة 4 */}
            <div className="flex flex-col items-start bg-card p-6 rounded-2xl border relative">
              <span className="text-5xl font-black text-primary/15 mb-4">
                04
              </span>
              <h3 className="font-bold text-lg mb-2">النقل الآمن والسريع</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                نحمّل على سيارات مجهزة وننقل في الوقت المحدد مسبقاً. نقل العفش
                والاثاث بأمان تام، بدون تأخير وبدون أضرار.
              </p>
            </div>

            {/* الخطوة 5 */}
            <div className="flex flex-col items-start bg-card p-6 rounded-2xl border relative">
              <span className="text-5xl font-black text-primary/15 mb-4">
                05
              </span>
              <h3 className="font-bold text-lg mb-2">
                التركيب والتسليم الكامل
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                نركب كل قطعة في مكانها الجديد ونتأكد من رضاك التام قبل المغادرة.
                شركة نقل اثاث دبي المحترفة لا تترك لك شيئاً غير منتهٍ.
              </p>
            </div>
          </div>
        </section>

        {/* استدعاء نموذج حجز موعد للتواصل المباشر مع العميل */}
        <div id="quote-form-section" className="pb-20">
          <QuoteForm />
        </div>

        {/* قسم جدول الأسعار الشفاف */}
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                أسعار نقل الاثاث دبي – شفافية كاملة بلا مفاجآت
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                كثير من الشركات تعطيك سعراً منخفضاً في البداية، وبعد إتمام العمل
                تظهر رسوم ما كانت ذُكرت. هذا لا يحصل عندنا. السعر الذي تتفق عليه
                مسبقاً هو السعر النهائي.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
              <table className="w-full text-right border-collapse text-sm">
                <thead>
                  <tr className="bg-muted border-b border-border text-foreground font-semibold">
                    <th className="p-4">نوع النقل</th>
                    <th className="p-4">الحجم</th>
                    <th className="p-4 text-primary">النطاق التقريبي (AED)</th>
                    <th className="p-4">ملاحظات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">
                      نقل شقة (استوديو / 1 غرفة)
                    </td>
                    <td className="p-4">صغير</td>
                    <td className="p-4 text-primary font-bold">
                      300 – 600 درهم
                    </td>
                    <td className="p-4 text-muted-foreground">
                      حسب المسافة والطابق
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">نقل شقة (2–3 غرف)</td>
                    <td className="p-4">متوسط</td>
                    <td className="p-4 text-primary font-bold">
                      600 – 1,200 درهم
                    </td>
                    <td className="p-4 text-muted-foreground">
                      مع تغليف وفك وتركيب
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">نقل فيلا أو منزل كبير</td>
                    <td className="p-4">كبير</td>
                    <td className="p-4 text-primary font-bold">
                      1,200 – 3,000 درهم
                    </td>
                    <td className="p-4 text-muted-foreground">
                      يشمل قطع كبيرة وثقيلة
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">نقل مكتب صغير</td>
                    <td className="p-4">متوسط</td>
                    <td className="p-4 text-primary font-bold">
                      500 – 1,500 درهم
                    </td>
                    <td className="p-4 text-muted-foreground">
                      حسب كمية المعدات
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center bg-card p-6 rounded-2xl border">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                الأسعار تقريبية وتتوقف على الحجم والمسافة والخدمات المطلوبة.
                للحصول على سعر دقيق لحالتك، اتصل على{" "}
                <strong className="text-foreground">0551165993</strong> وفريقنا
                يجهّز لك العرض مجاناً.
              </p>
              <Button callBtn size="lg">
                <PhoneCall className="ml-2 size-4" /> احصل على تسعيرة دقيقة الآن
              </Button>
            </div>
          </div>
        </section>

        {/* قسم التغطية الجغرافية ومناطق دبي */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              نغطي جميع مناطق دبي – خدمة نقل اثاث في دبي من أي مكان
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-foreground/90 flex items-center gap-2">
              <MapPin className="size-5 text-primary" /> مناطق دبي التي نخدمها
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              نوفر خدمات نقل الاثاث دبي في كافة أحياء المدينة – سواء كنت في
              القلب التجاري أو في المناطق السكنية. نقل اثاث في دبي لدينا يصل إلى
              معظم المواقع بدون رسوم إضافية. ومن يبحث عن نقل اثاث دبى (بأي طريقة
              إملائية) – نحن موجودون.
            </p>

            {/* شبكة شبكية من 16 منطقة في دبي */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/40 p-6 rounded-2xl border">
              {[
                "جميرا",
                "دبي مارينا",
                "البرشاء",
                "ديرة",
                "مردف",
                "الخليج التجاري",
                "نخلة جميرا",
                "بر دبي",
                "قرية جميرا الدائرية",
                "القوز",
                "الورقاء",
                "الراشدية",
                "مدينة دبي الرياضية",
                "السطوة",
                "الكرامة",
                "وجميع مناطق دبي",
              ].map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-card border rounded-xl text-sm font-medium"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* روابط الإمارات الأخرى لتعزيز الروابط الداخلية للـ SEO */}
          <div className="p-8 rounded-2xl bg-card border">
            <h4 className="text-base font-bold mb-4 text-foreground">
              📍 خدماتنا في الإمارات الأخرى:
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button
                link="/movers-in-abu-dhabi"
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                خدمات نقل الاثاث في أبوظبي
              </Button>
              <Button
                link="/movers-in-sharjah"
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                نقل اثاث الشارقة
              </Button>
              <Button
                link="/movers-in-ajman"
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                خدمات النقل في عجمان
              </Button>
              <Button
                link="/movers-in-ras-al-khaimah"
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                نقل اثاث رأس الخيمة
              </Button>
              <Button
                link="/movers-in-al-ain"
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                نقل اثاث العين
              </Button>
            </div>
          </div>
        </section>

        {/* قسم آراء العملاء */}
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                ثقة عملاؤنا بنا – آراء العملاء في نقل اثاث دبي
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                نقل الأثاث ما هو مجرد نقل أشياء – هو ائتمان على مقتنياتك
                وذكرياتك. الثقة لا تُبنى بالإعلانات، بل بالتجارب المتراكمة.
              </p>
            </div>

            {/* إحصائيات وأرقام */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-6 text-center text-foreground/95">
                أرقام تتحدث عن نفسها
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-card border p-6 rounded-2xl shadow-xs">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                    500+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    عملية نقل ناجحة
                  </div>
                </div>
                <div className="bg-card border p-6 rounded-2xl shadow-xs">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                    4.9 من 5 ⭐
                  </div>
                  <div className="text-xs text-muted-foreground">
                    تقييم رضا العملاء
                  </div>
                </div>
                <div className="bg-card border p-6 rounded-2xl shadow-xs">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-muted-foreground">
                    جاهزية تامة على مدار الساعة
                  </div>
                </div>
                <div className="bg-card border p-6 rounded-2xl shadow-xs">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                    20+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    خبير ومحترف بالشركة
                  </div>
                </div>
              </div>
            </div>

            {/* آراء حية للعملاء */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-center text-foreground/95">
                ماذا قال عملاؤنا عن تجربة نقل الاثاث في دبي؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* العميل 1 */}
                <div className="bg-card p-6 rounded-2xl border flex flex-col justify-between shadow-xs">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    *&quot;فريق حماد موفرز أنجز نقل شقتي في جميرا في أقل من 4
                    ساعات بدون أي تلف&quot;*
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-semibold text-foreground">
                      أحمد – دبي مارينا
                    </span>
                    <span className="text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>

                {/* العميل 2 */}
                <div className="bg-card p-6 rounded-2xl border flex flex-col justify-between shadow-xs">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    *&quot;أفضل شركة نقل اثاث دبي جربتها. السعر معقول والخدمة
                    ممتازة من أولها لآخرها&quot;*
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-semibold text-foreground">
                      فاطمة – البرشاء
                    </span>
                    <span className="text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>

                {/* العميل 3 */}
                <div className="bg-card p-6 rounded-2xl border flex flex-col justify-between shadow-xs">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    *&quot;التزموا بالموعد ودافعوا عن الأثاث باحترافية. ما توقعت
                    هالمستوى&quot;*
                  </p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-semibold text-foreground">
                      محمد – القوز
                    </span>
                    <span className="text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* استخدام عنصر الـ CTA الموفر */}
        <CTASection
          first="احصل على عرض سعر"
          second="لنقل أثاثك اليوم"
          para="اتصل بنا، تواصل عبر الواتساب أو املأ النموذج. سنرد عليك سريعاً بتقدير سعر واضح وخالٍ من الالتزامات."
        />

        {/* قسم الأسئلة الشائعة */}
        <section className="py-20 max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              الأسئلة الشائعة حول نقل اثاث دبي
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          </div>

          <div className="space-y-6">
            {/* السؤال 1 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                ما هي تكلفة نقل اثاث في دبي؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                تعتمد التكلفة على حجم الأثاث والمسافة والخدمات المطلوبة. بشكل
                عام، تتراوح أسعار نقل الاثاث بين 300 و3,000 درهم حسب نوع الوحدة.
                نقل اثاث رخيص دبي متاح عندنا بجودة فعلية. للحصول على سعر دقيق
                لحالتك، اتصل بنا وستحصل على عرض مجاني خلال دقائق.
              </p>
            </div>

            {/* السؤال 2 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                كم يستغرق نقل اثاث شقة في دبي?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                استوديو أو غرفة واحدة يحتاج عادةً ساعتين إلى ثلاث ساعات. الشقق
                الأكبر (2–3 غرف) تأخذ من 3 إلى 6 ساعات حسب الحجم والطابق
                والمسافة بين الموقعين.
              </p>
            </div>

            {/* السؤال 3 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                هل تقدمون خدمة نقل الاثاث بين الإمارات؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                نعم. نوفر خدمة نقل اثاث من دبي إلى أبوظبي والشارقة وعجمان ورأس
                الخيمة والعين وبقية الإمارات. نقل بين الإمارات بنفس معايير
                الجودة التي نطبقها داخل دبي.
              </p>
            </div>

            {/* السؤال 4 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                هل تشمل الخدمة الفك والتركيب؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                نعم. فك وتركيب اثاث مشمول في الباقة الأساسية. الخدمة شاملة من
                البداية للنهاية، ولا يوجد رسوم إضافية على هذا البند.
              </p>
            </div>

            {/* السؤال 5 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                كيف أضمن سلامة أثاثي أثناء النقل؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                نستخدم بلاستيك فقاعي وفوم وأدوات تثبيت داخل الشاحنة. تغليف
                احترافي لكل قطعة يقلل خطر الخدوش والكسر بشكل كبير. ضمان السلامة
                جزء من الخدمة الأساسية، ليس خياراً إضافياً.
              </p>
            </div>

            {/* السؤال 6 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                هل تعملون في عطلات نهاية الأسبوع؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                نعم. نعمل 7 أيام في الأسبوع على مدار 24 ساعة. نقل اثاث 24 ساعة
                متاح بدون رسوم إضافية على الجدولة في أيام العطل.
              </p>
            </div>

            {/* السؤال 7 */}
            <div className="p-6 bg-card border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary">Q.</span>
                ما هي أكثر مناطق دبي التي تخدمونها؟
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mr-6">
                نغطي جميع مناطق دبي. الأكثر طلباً عندنا: نقل اثاث جميرا، نقل
                اثاث مارينا، نقل اثاث ديرة، مردف، البرشاء، والخليج التجاري. إذا
                لم تجد منطقتك في القائمة، اتصل بنا مباشرة.
              </p>
            </div>
          </div>
        </section>

        {/* قسم الخاتمة والدعوة للإجراء الأخير */}
        <section className="py-16 bg-foreground text-white">
          <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              احجز خدمة نقل اثاث دبي الآن – عرض سعر مجاني
            </h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed text-sm md:text-base">
              حماد موفرز جاهزة لمساعدتك من اليوم. خدمة شاملة، سعر واضح، وفريق
              يمكنك الاعتماد عليه. سواء كنت تنقل شقة أو فيلا أو مكتباً في أي
              منطقة بدبي، التواصل معنا هو الخطوة الأولى والأسهل.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Button callBtn size="lg" className="px-8 font-semibold">
                📞 اتصل الآن: 0551165993
              </Button>
              <Button
                whatsappBtn
                size="lg"
                variant="secondary"
                className="text-white border-white/20 hover:bg-white/10 px-8"
              >
                💬 تواصل عبر واتساب | احصل على عرض سعر مجاني خلال 5 دقائق
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
