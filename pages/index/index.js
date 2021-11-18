// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    articles: [{
      id: '1',
      title: '做好数字化就业的大文章',
      readCount: 17.4,
      introduction: "数字化技术已将人类带进数字智能化社会，各行各业正在加快数字化转",
      img: "https://pic2.zhimg.com/v2-c0730f75b6e5c138593fb1609ba8d596_1440w.jpg?source=172ae18b",
      date: "2020年12月 ",
      from: "光明网",
      html: '<p>　　数字技术已将人类带进数字智能化社会，各行各业正在加快数字化转型进程，越来越多的高校毕业生主动选择数字化就业。教育系统要紧跟时代发展步伐，适应并引领数字化就业新常态，进一步开发利用好大学生数字化就业这片新蓝海。</p><p><strong><font color="#993300">　　数字智能化社会催生数字化就业新常态</font></strong></p><p>　　数字经济是数字智能化社会经济的主导形态，在整个经济结构中的占比将越来越高。中国信通院发布《中国数字经济发展白皮书（2020年）》，2019年我国数字经济规模达到35.8万亿元，占GDP比重为36.2%。当前，数字孪生技术、工业互联网、人工智能与传统产业加速融合，基础设施云化、中台化、移动化，企业的组织形态、研发设计、管理方式、生产方式、销售服务随之而变，身处不同地方的企业管理与技术人员在虚拟空间对现实世界的无人工厂下达各种指令。有人预测，未来消费者购买的产品更多是数据包，收到后将产品设计和参数输入自家3D打印设备，就可以坐等产品面世。据普华永道判断，88%的中国企业已经把数字化融入战略，各地加快打造全联接、全感知、全智能的数字化平台推动各行各业数字化转型，数字化人才日益成为创新驱动发展、企业转型升级的核心竞争力。2020年4月，发改委、中央网信办发布的《关于推进“上云用数赋智”行动 培育新经济发展实施方案》，助力中小微企业数字化转型。2020年6月北京发布《北京市加快新场景建设培育数字经济新生态行动方案》，提出通过数字化应用场景建设扶持高成长性企业，将北京建设成为全国领先的数字经济发展高地。</p><p>　　数字经济的迅猛发展必然带来数字化就业的快速崛起。不断涌现的新行业、新产业、新价值、新模式、新业态，催生一批又一批数字化、智能化、信息化新职业新岗位。2020年6月，教育部办公厅下发《关于严格核查2020届高校毕业生就业数据的通知》，将互联网营销工作者、公众号博主、电子竞技工作者等作为自由职业纳入就业统计。2020年7月，人社部联合国家市场监管总局、国家统计局向社会发布了《中华人民共和国职业分类大典（2015年版）》颁布以来的第三批新职业，区块链工程技术人员、区块链应用操作员、互联网营销师、城市管理网格员、信息安全测试员、在线学习服务师等数字化新职业赫然在列，直播销售员、互联网信息审核员等新工种也成为正式职业称谓。腾讯微信发布《2019-2020微信就业影响力报告》显示，2019年由公众号、小程序、微信支付、企业微信等工具带动就业机会2963万个。2020年7月，人社部中国就业培训技术指导中心联合阿里巴巴钉钉发布《新职业在线学习平台发展报告》预测，未来5年云计算工程技术人员、物联网安装调试员、无人机驾驶员、电子竞技员、电子竞技运营师、人工智能工程技术人员、建筑信息模型技术员、工业机器人系统操作员和运维员、农业经理人、数字化管理师等人才缺口近千万。2020年7月，国家发改委等13部门联合印发《关于支持新业态新模式健康发展 激活消费市场带动扩大就业的意见》，对加快发展数字经济15大新业态新模式重点方向提出19项创新支持政策，线上教育、无人经济、新个体经济、互联网医疗等新业态将孕育海量新职业人才需求。由此可见，数字化就业必将发展成为一片浩渺无垠的新蓝海。</p><p><strong><font color="#993300">　　数字化就业是大学生就业的一片新蓝海</font></strong></p><p>　　数字化就业是大学生就业的重要增长点。高校毕业生是数字化就业的重点群体，是数字化劳动力的生力军，直接带动农民工群体等参与数字化就业。数字化就业形态降低了就业创业门槛，是“大众创业、万众创新”的新动力，是更值得大学生开拓的一片蓝海。综合而言，数字化就业的形式包括数字化就业服务和数字化就业岗位，即“云招聘”“云岗位”和“云创业”，覆盖了就业所有环节，已经成为了就业的“稳定器”。互联网平台是“云岗位”的重要依托，以微信为代表的互联网平台建立了新的就业形态，降低了创业门槛，惠及众多小微企业和个人创业者，助推智力创业新时代。</p><p>　　数字化就业为发展素质教育提供了新场景。数字化新职业新工种新岗位，尤其是数字化创业，对从业者和创业者的系统设计能力、原创性设计能力、分解复杂事物的碎片化能力以及快速迭代与自主管理能力等普遍要求较高，这些能力依赖应试教育是无法培养出来的。数字化就业对从业者和创业者素质的要求与素质教育强调的创新精神和实践能力等目标要求高度契合。传统就业求稳，以公务员、事业单位、国有企业为首选，其次是高薪为特征的外资企业、大型私有企业，最优秀的高校毕业生都进了政府机关，自己创业比例很低。传统就业更多是被动选择现有岗位，是个人发展被动适应职场需要，是与应试教育相匹配的就业形式。相比之下，数字化就业更多是新职业新岗位，是基于个人专长和兴趣爱好个性化就业，是“我的人生我做主”“我命由我不由天”。数字化就业让更多年轻人看到就业新希望，发现职业新大陆，如果他们获得相应的经济地位、社会地位和政治地位，无疑会改造整个社会的就业观，吸引大批有才华、有创造力、有改变世界理想的青年在虚拟世界冲浪拼搏，从而改变现实世界的从业人员结构，让人力资源得到更优化的配置，推动社会以更快速度进步。可以说，数字化就业是各类人才各尽其能、各尽其用的广阔天地，能够让全社会真切地看到素质教育的优势，为发展素质教育提供了新场景。</p><p><strong><font color="#993300">　　教育系统要做好数字化就业这篇大文章</font></strong></p><p>　　出台《大学生数字化就业指导意见》。数字化就业是数字智能化社会的新常态，加强数字化就业教育、提高大学生数字化就业能力刻不容缓。建议出台《大学生数字化就业指导意见》，指导高校开设“数字化就业教育”必修课程，将提高学生信息素养和数字化就业能力作为全校通识教育的核心目标，让所有学生认清数字化就业的新趋势，看准数字化产业的发展方向，熟练掌握数字化就业创业工具的应用技能，熟悉数字化就业创业的形态、业态、生态。以“一人一策”等方式，为学生数字化就业提供全方位指导服务，积极引导毕业生找准职业定位，合理调整预期，提高高校毕业生就业率和就业质量，提高教育对数字经济发展的贡献度。</p><p>　　搭建数字化就业综合服务平台。构建跨省域或重点区域（长三角、长江经济带、黄河生态圈、粤港澳、珠三角、京津冀等）大学生数字化就业创业综合服务平台，实现互联网技术和人力资源管理的深度结合，打通重点区域内政府或高校间的信息共享渠道，完成线上面试、电子签约、就业审核以及相关报到手续等程序。高校可以基于平台建立动态跟踪的调研和反馈机制，向就业困难学生提供个性化指导，引导并支持大学生“云创业”。企业管理人员可以一键登陆将用人需求广而告之，应聘简历可根据编程自动匹配到适合的职业机会。</p><p>　　完善数字化就业配套服务政策。建议教育部会同人社部、商务部、国家市场监管总局、国家税务总局、网信办等部门，根据数字化就业大学生的特殊处境和利益诉求，以及“云岗位”“云创业”的新特点，完善登记注册、市场监管、税费减免、就业认定与社会保障等配套服务政策，宣传优秀创业团队与个人的成功故事并给予表彰，为大学生数字化就业创业营造更加宽松自由的市场环境。开发适合高校毕业生就业创业的新业态领域，加快推进文案编辑、网络医疗、在线家教、流量运营、社群运营、短视频运营、小程序运营、公众号运营等新职业国家职业标准制定和技能等级认定工作，为新职业人才培养培训规范化提供必要依据。</p><p>　　发展素质教育服务数字化就业。长期以来，推进素质教育阻力重重、成效不彰，归根结底是素质教育与学生就业创业出口没有建立看得见的联系，学生及家长还是更相信高分进名校这条“阳光大道”。如今，数字化就业为素质教育提供了无限应用新场景，素质教育迎来“柳暗花明又一村”的好局面。建议借助数字化就业这片新蓝海，着力宣传素质教育在数字化就业新形态中的重要价值，优选推送素质教育就业创业先进典型，让素质教育理念更加深入人心，引导全社会在思想和行动上更加拥护并践行素质教育，从根本上扭转片面追求应试教育的倾向，让素质教育直接服务于大学生数字化就业创业。</p>'
    }, {
      id: '2',
      title: '不仅“好就业”，更要“就好业”',
      readCount: 17.4,
      introduction: '“十四五”规划和2035年远景目标纲要提出，要健全有利于更充分更高',
      img: "http://www.gaoxiaojob.com/zhaopin/uploads/allimg/211116/2_211116153114_1.png",
      date: "2021年11月",
      from: "中国经济网",
      html:' <div class=TRS_Editor><p>　　<font face="楷体,楷体_GB2312">“十四五”规划和2035年远景目标纲要提出，要健全有利于更充分更高质量就业的促进机制，扩大就业容量，提升就业质量，缓解结构性就业矛盾。当前，我国就业市场依然面临总量压力，结构性矛盾比较突出，招工难和就业难并存。本期邀请三位专家围绕这一主题进行讨论。</font></p><p>　　<font face="楷体,楷体_GB2312">主持人</font></p><p>　　<font face="楷体,楷体_GB2312">经济日报社经济研究部主任、研究员 徐向梅</font></p><p>　　<strong>促进高校毕业生就业要量质协调</strong></p><p>　　主持人：青年就业始终是影响就业稳定的重要方面，今年我国高校毕业生规模再创新高，如何促进这一群体更高质量就业？</p><p>　　赖德胜【中央党校（国家行政学院）社会和生态文明教研部副主任】：党中央、国务院对高校毕业生就业工作高度重视，将它列为就业工作的重中之重。截至目前，人社部门已接连启动大中城市联合招聘、民营企业招聘月、百日千万网络招聘专项活动，推出近4000场专场招聘、直播带岗等，为毕业生提供岗位超500万个。今年，我国高校毕业生规模达909万人，再创新高，促进就业任务依然较重。</p><p>　　造成这种压力的原因，既有数量上的，更有结构上的，表现为部分毕业生找工作难，但很多行业和企业却招不到合适的员工，大量求职者的素质和技能满足不了企业的需求，有些行业的求人倍率居高不下。</p><p>　　促进高校毕业生就业，要量质协调、长短结合，不仅“好就业”，更要“就好业”。为此，要着力把握好以下几个方面。</p><p>　　一是增强经济发展吸纳高校毕业生就业的能力。不同的经济发展方式会导致不同的就业结果，对不同教育程度劳动者就业的影响也不一样。我国新增劳动者普遍有较高教育程度，要求有相应的岗位平台使其人力资本得到更好释放。因此，要立足新发展阶段，贯彻新发展理念，构建新发展格局，实现高质量发展。特别是要推动传统产业转型升级，由投入驱动转向创新驱动，提高产业发展的知识含量和科技含量，创造更多适合高校毕业生就业的岗位。比如，大力发展高端制造业，推动生产性服务业创新发展，加快生活性服务业高品质和多样化升级；推动数字经济与实体经济深度融合，催生更多新产业、新业态、新商业模式，培育多元化多层次就业需求等。</p><p>　　二是增强高校毕业生的就业适应力。就业的结构性矛盾凸显，说明高校毕业生的供给与需求不匹配，要深化劳动力市场供给侧结构性改革，优化高校毕业生的学科专业结构。我国正处于工业化中后期，当前又叠加信息化和数字化，从制造大国迈向制造强国，需要大量的理工科专业人才，要采取措施稳定甚至扩大理工科专业的招生比例，加强新工科、新农科、新医科和新文科建设，培养更多复合型人才，从而使供需结构更好匹配。另外，要加强高校毕业生技能培养，有条件的高校可实施“学历+证书”培养模式，鼓励学生掌握一些市场需要的技能，增强从学校到工作的转换能力。高校毕业生自身也要转变观念，主动调整自己的工作预期。</p><p>　　三是更好发挥创业带动就业的作用。学生是大众创业万众创新的生力军，支持大学生创新创业具有重要意义。日前，国务院办公厅印发了《关于进一步支持大学生创新创业的指导意见》，将推动形成新一轮的大学生创业浪潮。创业具有倍增的就业效应，同时创业对创新也有重要推动作用。但有调查表明，我国高校毕业生自主创业的比例并不高，与发达国家相比差距较大。我国经济体量大，有很强的成长性，“三新”经济蓬勃发展，营商环境不断完善，是创业的沃土。因此，大学生创业还有很大提升空间，进一步推动大学生创新创业实践，将有效促进高校毕业生高质量就业。</p><p>　　四是围绕国家战略形成更多人才高地和人才平台。我国已进入高质量发展阶段，创新在现代化建设全局中处于核心地位，要通过人才强国建设实现中华民族伟大复兴。因此，应加快建设世界重要人才中心和创新高地，在北京、上海、粤港澳大湾区建设高水平人才高地，一些高层次人才集中的中心城市着力建设吸引和集聚人才的平台，加快形成战略支点和雁阵格局。人才强国、乡村振兴、新型城镇化等国家战略，将会创造更多适合高校毕业生的就业岗位，高校毕业生在服务国家战略中更好实现就业，更好实现人生价值。为此，要进一步深化体制机制改革，发挥市场在生产要素配置中的决定性作用，完善评价机制，畅通流动渠道，使人人有机会成才。</p><p>　　<strong>确保零工市场“灵活而不零乱”</strong></p><p>　　主持人：目前，“零工经济”异军突起，有效提高了人力资源市场的灵活性。但一些新情况新问题随之而来，如何确保零工市场“灵活而不零乱”？</p><p>　　田永坡（中国人事科学研究院人力资源市场与流动管理研究室主任）：“零工经济”是指劳动者以弹性、灵活的方式提供劳动、获取经济收入的活动。按照目前2亿灵活就业人员的规模估算，这个群体大约能占到劳动力的四分之一左右。“零工经济”已不仅仅是就业的一个补充，而成为劳动者参与经济活动的重要组成部分。</p><p>　　毋庸置疑，“零工经济”有效地提高了人力资源市场的灵活性，为雇主应对市场冲击、及时调整雇用策略提供了支持，在一定程度上降低了用工成本。对劳动者来说，增加了就业和获取经济收入的机会，并拥有一定的自由选择。但也应注意到，随之而来的一些新情况新问题已影响到零工市场的健康可持续发展。比如，一些企业为了降低雇用成本，把长期使用或合作的劳动者划为非正式工，损害了劳动者带薪休假、社保、工作保障等权益。而由于现有的制度不健全，使得这种做法处于灰色地带，难以有效监管。一些从事“零工经济”的劳动者，特别是低技能劳动力，其就业稳定性不高，为了保证获得一定收入，他们不得不遵照企业或者零工平台的规则，劳动关系、员工权益等得不到切实保障。</p><p>　　要确保零工市场“灵活而不零乱”，还需从以下几个方面加强和完善。</p><p>　　第一，补齐“零工经济”运行的制度短板。对于零工市场出现的一些新情况新问题，国务院已做出重要部署，比如今年5月出台的对灵活就业人员参加城乡居民基本养老保险的兜底措施、平台灵活就业人员职业伤害保障试点等。下一步，还有两类制度需要加快出台：一是劳动者与相关利益者关系界定和权利义务划分的制度，这是规范其他权利义务的起点；二是探索建立和完善从业劳动者积极、便利参加社会保险的管理制度。针对零工参保的痛点，依托自贸区、综合实验区等加快试点和经验推广。适应灵活就业人员就业稳定性低的特点，在现行参照城镇单位就业人员平均工资的基础上，适当降低以灵活就业人员身份参加养老和医疗保险的基数。鼓励商业保险公司、人力资源服务机构和用工平台联合开发适合“零工经济”从业人员的商业保险产品。</p><p>　　第二，统筹零工市场和其他人力资源市场建设。由于经济发展阶段、参与主体、管理体制等原因，我国的人力资源市场由人才市场、劳动力市场、零工市场等多个市场组成，这些市场之间不是完全独立而是相互关联的，特别是随着劳动者素质的提升以及劳动力流动性增强，这些市场之间的边界日趋模糊。因此，零工市场在统筹建设上要注意两点：一是要从顶层设计的角度出发，统筹考虑劳动者在不同市场之间流动的现实需要、切身利益和不同市场独有的特点，构建一套基本制度体系，以保障劳动力可以顺畅流动。当前劳动者在不同市场的流动越来越频繁，这就需要相关的社保、人才评价等制度在不同市场之间衔接得当。在制度设计上，要根据不同市场的就业形态，体现不同市场之间的差异。二是要立足人力资源市场中求职招聘日益线上化的特点，因时因地建设零工市场。与上个世纪八九十年代建设人才市场、劳动力市场不同的是，现阶段零工市场建设的重点在于规范网络招聘、平台用工等行为，而对于线下实体场所，则应根据不同区域的经济发展水平和需要，因地制宜进行建设。</p><p>　　第三，加强对零工市场的引导、监管和服务。积极引导“零工经济”参与主体建立可持续共享共赢机制，以国内外一些平台公司对从事零工的劳动者实施的职业发展计划为样本，积极在社会进行宣传。鼓励雇用方、发包方、平台方在利用零工市场灵活优势的同时，采取适当向劳动者倾斜的人力资本投资、利益分配等策略。利用市场监管、税务、人社、公安等部门的数据交换机制，对以纯粹降低成本的“化整为零”行为进行监管、纠正和打击。充分发挥工会、妇联等组织作用，为零工从业者职业发展、权益维护等提供有力合理的服务。</p><p>　　<strong>给予女性更多政策激励和就业选择</strong></p><p>　　主持人：我国的出生率已连续三年下降，同时老龄化压力不断加大。如何从个体层面给予女性更多激励、减少生育成本，为女性提供更多就业选择？</p><p>　　张丹丹(北京大学国家发展研究院副教授)：近年来，数字经济的蓬勃发展为女性就业带来了更多机会，提升了职场女性面临家庭和事业两难选择的灵活性。特别是随着信息通信技术的快速发展，工作形态发生了明显改变，远程工作逐渐成为一种重要的工作形式。基于2020年从业人员追踪调查数据的一项研究发现，在我国城镇劳动力市场上，相比男性从业者，女性的工作远程可能性明显占优，女性中有一半从事的工作具有更高的远程可能性，而男性的这一比重只有28%。这说明，女性从业者就业的灵活性更大，在新经济业态中显现出主导地位。</p><p>　　但也应看到，在疫情防控常态化时期，由于职场女性承担了更多家庭抚养负担，相对男性，她们受到了更大的就业冲击。同时，心理健康水平测评也显示，女性从业者心理健康水平持续低于男性。</p><p>　　当前三孩生育政策放开，女性拥有了更多生育自由，同时也意味着女性的家庭养育负担进一步加重，可能会对女性的就业机会、收入和职业发展前景产生影响。相比其他国家，我国女性的就业意愿更强，对女性劳动力的保护更好，特别是目前各类生育保护和就业政策，在一定程度上保障了女性生育后在劳动力市场的福利水平。</p><p>　　根据第七次全国人口普查数据，我国的出生率已连续三年下降，是新中国成立以来的最低点，同时老龄化压力不断加大。在这一背景下，如何从个体层面给予女性更多激励、减少生育成本、保护其在劳动力市场的基本权益，是亟需解决的问题。建议从以下几个方面积极推进女性高质量就业：</p><p>　　其一，积极发展灵活就业、推进远程就业和居家办公等新型就业模式，为女性提供更多的就业选择。同时，传统就业模式中也应大力发展弹性工作制。目前我国女性劳动力从事弹性工作的比例远低于其他国家，劳动力市场尚存较大的调整空间。</p><p>　　其二，生育政策的调整应考虑女性承担的职场风险，为女性提供经济补贴和心理疏导。建议为女性提供生育期劳动补贴或提升其养老金的国家补贴比例，减少孕期女性的后顾之忧。</p><p>　　其三，促进育儿成本社会化，大力发展和健全育儿机构，降低育儿成本，并适当提供育儿补贴，使女性在生产后能尽早自主地进行就业选择。建议通过专项补贴或减税等，适当减少或补贴用人单位在女性产假期间需要支付的额外劳动成本，以此改善生育女性就业条件。</p><p>　　其四，积极为产后重返职场的女性提供技能培训和就业指导，促使其尽快提升技能，适应职场需要，高质量实现再就业。</p></div></article></div>'
    }, {
      id: '3',
      title: '择业技巧有哪些',
      readCount: 17.4,
      introduction: '学会收集信息，善于推销自己，实习经历准备，掌握技术实力，拥有',
      img: "https://p.9136.com/11/l/c7f3d6b0037_5fbf7f00672c3.jpg",
      date: "2021年11月",
      from: "网易",
      html:'<p id="0DBBLJ5J">择业技巧有哪些：学会收集信息，善于推销自己，实习经历准备，掌握技术实力，拥有资格证书等。</p><p id="0DBBLJ5K">1.所谓择业，就是择业者根据自己的职业理想和能力，从社会上各种职业中选择其中的一种作为自己从事的职业过程。在职业选择过程中，择业者不仅要考虑到个人的需要、兴趣、能力等因素，还要考虑社会发展的需要。</p><p class="f_center"><img style="width:50%"  src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1109%2Fde60fa7ej00r2aeou001jc000ku00b4c.jpg&thumbnail=650x2147483647&quality=80&type=jpg"/><br/></p><p id="0DBBLJ5M">2.有人说，成年人最大的权力就是拥有选择权。当我们谈“择业”时，是默认我们已经有了择业的底气、能力和才华。这既需要我们长期的规划，更需要一步步细小的积淀，把握时代大势、思考国家发展、钻研个人技术本领，每一个环节都必不可少。</p><p class="f_center"><img style="width:50%"  src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1109%2Fef956f33j00r2aeou001rc000ku00b4c.jpg&thumbnail=650x2147483647&quality=80&type=jpg"/><br/></p><p id="0DBBLJ5O">3.择业与价值理念倾向于利益本位。当代大学生普遍的择业与价值理念更加倾向于利益本位。也就是说，大学生在就业的过程中往往是将个人利益放在首位，从自我的角度出发，强调个人今后的发展和前途，这也就导致了当前许多热门职业和高薪职业应聘者供不应求，但是一些基层行业或公益性单位却鲜有人问津。</p><p class="f_center"><img style="width:50%" src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1109%2F96e73a6fj00r2aeou0013c000ku00b4c.jpg&thumbnail=650x2147483647&quality=80&type=jpg"/><br/></p>'
    }, {
      id: '4',
      title: '最难就业季！工作怎么找？湖南大学26位导师，教你开挂小技巧！',
      readCount: 17.4,
      introduction: '就业，是大学生重要的人生岔路口之一。在“最难就业季“，得良言几',
      img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.ktAeoDEzAnfj_MVlYnU65wHaFU?w=224&h=180&c=7&r=0&o=5&dpr=1.65&pid=1.7",
      date: "2021年11月",
      from: "太阳网",
      html:"<h1>没找到这篇文章……</h1>"
    }, {
      id: '5',
      title: '22岁董明珠秘书爆红，靠的不仅是高颜值',
      readCount: 17.4,
      introduction: '近日，董明珠在公开场合表示，要将自己的秘书孟羽童培养成为"第二',
      img: "https://inews.gtimg.com/newsapp_bt/0/14164525884/1000",
      date: "2021年11月",
      from: "新浪科技",
      html:'<p>　　hello大家好~我是孟羽童小孟，跟大家汇报一下：我现在已经正式入职格力两个月了，担任的职位是格力电器董事长董总的秘书。</p><p>　　之前和老板参加那个活动的视频受到非常多大家的关注，很感谢大家一直以来对董总、包括对我们格力电器的支持和鼓励，我也收到很多比较中肯的批评和建议，可以让我及时去反思自己的不足。</p><p>　　其实跟大家说实话，我现在内心是非常惶恐的，因为我觉得我现在的能力还完全达不到这样的高度，觉得比我优秀、比我努力、比我有才华的人真的太多太多了，我只是非常幸运能遇到这样很好的机会，遇到很好的老板和这样的平台。我真的就是一个很普通的女孩和一个打工人，我也知道自己有很多的缺点和不足，所以非常感谢大家愿意给我提出中肯的建议或者是意见。</p><p>　　希望大家可以多多监督我，帮助我更好的成长。当然了，我也一定会努力做好自己的工作，用心过好自己的生活，也希望大家可以多多支持我们格力电器，希望大家度过美好的一天~。</p><p>　　据九派新闻报道，作为国内最知名的女性成功企业家代表之一，董明珠虽已到了法定退休年龄，但是各种事务让她无法放下公司。</p><p>　　而选择格力接班人，也是董明珠现阶段最重要的工作之一。</p><p>　　日前，据国内媒体报道，浙江大学外语学院22岁女孩孟羽童成为董明珠秘书。</p><p>　　报道称，董明珠近日在某活动现场表示，希望她能在我身边，把她培养成未来第二个董明珠。</p><div class="img_wrapper"><img src="https://n.sinaimg.cn/default/transform/300/w550h550/20211112/02dc-c2ab755637be62df60c34f39bbd055e4.jpg" alt="" data-link=""><span class="img_descr"></span></div><p>　　据悉，为招聘更多优秀员工，2021年初，董明珠加入综艺《初入职场的我们》。</p><p>　　在她的综艺首秀中，董明珠提到，明天是属于年轻人的，并称“现在年轻人应该加强职业认知，真正的追梦是中国制造。”</p><p>　　值得一提的是，在该档综艺节目中，孟羽童获得了董明珠赏识，最终由实习生转正成为董事长秘书。</p><div class="img_wrapper"><img src="https://n.sinaimg.cn/default/crawl/322/w480h1442/20211112/7dce-8a175d87ecb95abebb0f682f045f755d.jpg" alt="" data-link=""><span class="img_descr"></span></div><p>　　据了解，董明珠曾不止一次透露过格力接班人的选拔要求：不会以亲属为关系，也不会以朋友为关系，只看能力。</p><p>　　董明珠坦言，“如果今天有人来接替，我明天就可以退休。但是我即使退休，格力这两个字也不可能从我思想里消失”。</p><p>　　对于走红和网友的关注，孟羽童表示内心非常惶恐，遇到这样的机会只能说很幸运，我只是一个普通女孩和打工人，我知道自己有很多的不足，非常感谢大家给我提出中肯的意见和建议。</p><p>　　对此，有网友留言称：“给董总建议，赶快加大年轻人的市场投入和广告。”</p>'
    }]
  },
  articleDetail: function (e) {
    console.log(e.currentTarget.dataset)
    var obj = JSON.stringify(e.currentTarget.dataset.obj);
    wx.navigateTo({
      // url: "/pages/articleDetail/index?title="+e.currentTarget.dataset.title+"&date="+e.currentTarget.dataset.date+"&from="+e.currentTarget.dataset.from+"&id="+e.currentTarget.dataset.id
      url: "/pages/articleDetail/index?obj="+encodeURIComponent(obj)
  })
  }
})