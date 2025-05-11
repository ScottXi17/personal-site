import { useState } from "react";

export default function BlackTideWebsite() {
    const [lang, setLang] = useState("en");

    const content = {
        en: {
            title: "Black Tide",
            subtitle: "ACG x IT x Data — Creative Systems Builder",
            about: `Hi, I’m XX — a multidisciplinary creator from China, currently pursuing a Master’s degree in Information Technology at The University of Queensland. I previously studied Taxation and completed a semester in UQ Business School, gaining insights into financial modeling and data interpretation.

I combine my IT skills with a deep interest in ACG (anime/game culture), narrative design, and AI automation. A devoted fan of Sakura Matou, I aim to build systems that reflect emotional depth and digital creativity.

Currently open to freelance or remote collaborations in creative tech, data storytelling, or AI-enhanced visual novel projects.`,
            skills: [
                "Programming: Python, JavaScript, SQL",
                "Frontend: HTML5, CSS3, React",
                "AI Tools: ChatGPT, Notion AI, Automation",
                "Data: Pandas, Financial Statement Analysis, PE & DDM Models",
                "Creative: Ren’Py, Visual Novel Scripting, Worldbuilding, Sakura Fan",
                "Languages: English (fluent), Chinese (native), Japanese (learning)",
            ],
            projects: [
                "✦ AI Yandere Character Generator — A demo tool that generates narrative-style character profiles for visual novels using frontend JS + GPT.",
                "✦ Financial Data Visualization — Uses Python and Plotly to visualize dividend and PE-based valuation of sample stocks.",
                "✦ This Website — A multilingual, low-maintenance personal system built for global showcasing and freelance collaboration.",
            ],
            contact:
                "📧 Email: richardscott20020819@gmail.com | Remote-Friendly | Accepting EN / JP / CN tasks\nNote: I may not respond immediately as I often go offline for mental recharge. But sometimes I get inspired and take a few gigs in a burst. Feel free to reach out anyway!",
        },
        zh: {
            title: "Black Tide",
            subtitle: "ACG × IT × 数据分析 · 创意系统开发者",
            about: `你好，我是XX，一位来自中国的跨界型创作者。目前在昆士兰大学攻读IT硕士，曾学习税收专业，并在UQ商学院修读半年课程，具备基本财务建模与数据分析能力。

我将IT技术与ACG叙事、AI自动化相结合，深度参与虚拟角色设定与脚本设计，尤其喜爱间桐樱。

现接受自由职业、远程协作项目，欢迎联系。`,
            skills: [
                "编程：Python、JavaScript、SQL",
                "前端开发：HTML5、CSS3、React",
                "AI工具：ChatGPT、Notion AI、自动化脚本",
                "数据分析：Pandas、财务报表、市盈率模型、股息贴现模型",
                "创意表达：Ren'Py、视觉小说脚本、世界观设定、樱厨",
                "语言能力：英语（流利）、中文（母语）、日语（学习中）",
            ],
            projects: [
                "✦ 病娇角色生成器：使用前端+GPT自动生成视觉小说女主角设定",
                "✦ 股票估值可视化：用Python+Plotly展示PE/DDM估值模型样例",
                "✦ 本网站：三语支持的商业化个人展示站，适配自由职业者使用",
            ],
            contact:
                "📧 邮箱：richardscott20020819@gmail.com ｜支持远程合作｜接受中/英/日项目\n注：我经常断网摆烂、不定期上线，但偶尔灵感爆发，会突然接几单。欢迎随缘联系。",
        },
        jp: {
            title: "Black Tide",
            subtitle: "ACG × IT × データ分析 × 創作型開発",
            about: `こんにちは、XXです。中国出身のマルチスキルクリエイターで、現在クイーンズランド大学でIT修士課程に在籍しています。学部は税務専攻で、UQ商学部でも半年間学び、財務分析と数理評価の基礎を持っています。

ITスキルに加え、ACGの世界観設計、病み可愛いキャラ設定、自動化スクリプトの開発が得意です。特に間桐桜が大好きです。

現在、リモート案件・フリーランスの協力を募集中です。`,
            skills: [
                "プログラミング：Python、JavaScript、SQL",
                "フロントエンド：HTML5、CSS3、React",
                "AIツール：ChatGPT、Notion AI、自動スクリプト",
                "データ：Pandas、財務分析、PER / DDM モデル",
                "創作：Ren’Py、ビジュアルノベル脚本、世界観構築、桜オタク",
                "言語：英語（流暢）、中国語（ネイティブ）、日本語（学習中）",
            ],
            projects: [
                "✦ 病み可愛いキャラ生成ツール：GPTとJSを使ったインタラクティブなプロフィール出力",
                "✦ 財務データの可視化：Python＋Plotlyで株式評価を図解",
                "✦ このサイト：三言語対応の個人展示用Webサイト、自由業に最適",
            ],
            contact:
                "📧 メール：richardscott20020819@gmail.com ｜リモートOK｜EN/JP/CN対応可\n※普段はネット断ち中で反応遅いかもしれませんが、突然やる気が出て数件受ける時もあります。気軽にご連絡ください。",
        },
    };

    const current = content[lang];

    return (
        <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8 space-y-10">
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold">{current.title}</h1>
                <p className="text-lg">{current.subtitle}</p>
                <div className="mt-2 space-x-2">
                    <button onClick={() => setLang("en")}>🇬🇧 EN</button>
                    <button onClick={() => setLang("zh")}>🇨🇳 中文</button>
                    <button onClick={() => setLang("jp")}>🇯🇵 日本語</button>
                </div>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    {lang === "en"
                        ? "About Me"
                        : lang === "zh"
                        ? "关于我"
                        : "自己紹介"}
                </h2>
                <p className="whitespace-pre-line">{current.about}</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    {lang === "en"
                        ? "Skills"
                        : lang === "zh"
                        ? "技能"
                        : "スキル"}
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    {current.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    {lang === "en"
                        ? "Projects"
                        : lang === "zh"
                        ? "项目展示"
                        : "プロジェクト"}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    {current.projects.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    {lang === "en"
                        ? "Contact"
                        : lang === "zh"
                        ? "联系我"
                        : "お問い合わせ"}
                </h2>
                <p className="whitespace-pre-line">{current.contact}</p>
            </section>

            <footer className="text-center text-gray-500 text-sm pt-8 border-t">
                © 2025 Black Tide | All rights reserved.
            </footer>
        </main>
    );
}
