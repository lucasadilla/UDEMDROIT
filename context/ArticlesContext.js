// context/ArticlesContext.js
import { createContext, useState, useContext } from 'react';

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Montée des idéologies de droite ; qu’est-ce que cela signifie pour les droits des femmes ?\n',
            image: '/images/blogs/coloredWomen.jpg',
            author: 'Lina Tourabi',
            authorImage: '/images/lina.png',
            date: '27 Oct. 2024',
            content: '          ‘‘Quand l’extrême droite avance, les droits des femmes reculent’’\n' +
                '\nQu’est-ce que l’extrême droite ?\n' +
                '\nC’est un ensemble de mouvements, partis politiques et idéologies qui se caractérisent par un nationalisme exacerbé, souvent accompagné de xénophobie, d’anti-immigration, et d’un rejet des valeurs progressistes. Ces idées comprennent un volet anti-féministe et un agenda opposé aux droits des femme. Son impact se fait visible dans de plus en plus d’États occidentaux à travers un accès à l’IVG graduellement réduit.\n' +
                '\nRéduction des droits reproductifs\n\n' +
                'Au Canada, le droit à l’avortement est considéré comme fondamental, puisqu’il est protégé par l’article 7 de la loi constitutionnelle de 1982. Cet article garantit le droit à la liberté, à la vie et à la sécurité, ce qui assure aux femmes le droit de disposer de leur corps. C’est une question de justice fondamentale. Si le vent de l’extrême droite traverse les frontières canadiennes, ce droit reproductif peut très bien cesser d’exister pour satisfaire une forte opinion publique.\n' +
                'Les dégâts de cette tendance politique sont déjà nombreux. En Italie, le gouvernement d’extrême droite de Giorgia Meloni a récemment adopté une loi qui permet aux militants pro-vie d’accéder aux cliniques de planification familiale où se tiennent des consultations sur l’IVG. Cette décision soulève l’enjeu du droit à la dignité dans l’espace médical qui se voit menacé. La déshumanisation de la femme en est une conséquence directe.\n' +
                'Par ailleurs aux États-Unis, depuis la décision de la Cour Suprême de 2022, plusieurs femmes font le choix de ne pas consulter un médecin à la suite d\'une fausse couche par crainte d’être accusées d’avoir illégalement avorté. Ce phénomène fait écho au drame de Brittany Watts, une Américaine qui a fait une fausse couche d’un fœtus non-viable. Le personnel médical s’interrogeait sur la légalité d’un avortement, ce qui a empêché la procédure d’avoir lieur, bien qu’une fausse couche fût inévitable. Brittany Watts a été poursuivie par le procureur de l’État de l’Ohio pour avoir profané le cadavre du fœtus. Ces faits soulignent l’importance d’un accès libre à l’IVG avant tout pour des questions de sécurité.\n\n' +
                'Retour aux rôles traditionnels\n\n' +
                'Qui dit extrême droite, dit retour de l’homme pourvoyeur et de la femme domestique. Bien que chacun soit libre de choisir son rôle au sein d’une société, il est impératif que ce choix ne soit pas forcé par une croyance qui établit la naturalité de ces rôles. Cette rhétorique est d’abord une entrave à l’autonomisation de la femme, projet qui, rappelons-le, fait l’objet de consensus de la majorité à l’ONU.\n\n' +
                'Lorsque cette autonomisation est compromise, les femmes se voient déléguer moins de pouvoir sur le marché du travail, dans les espaces de débat et même au sein de la famille. Promouvoir l\'éducation, la formation et le développement professionnel des femmes est un objectif que l’ONU s’engage à faire appliquer et cette émancipation est un facteur clé pour mettre fin aux disparités économiques et aux inégalités de genre. La Banque Mondiale rapporte qu’à l’échelle mondiale, la participation des femmes au marché du travail a diminué, passant de 51 % en 2000 à 48 % en 2019. Avec la montée des idéologies de droite, cet enjeu est d’autant plus d’actualité.\n',
        },
        {
            id: 2,
            title: 'Elles Investies',
            image: '/images/blogs/elles.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '10 mars. 2024',
            content: '« 82% des femmes s’en remettent à leur conjoint pour la gestion de leurs finances. […] Seulement une femme sur quatre possède des placements à la Bourse. »<p></p><p>C’est ce que M Karman Kong nous dévoile dans son best-seller Elle investit. Alors que les hommes entendent parler d’investissements dès leur plus jeune âge, les femmes elles sont poussées à l’éviter, construisant éventuellement une réticence de ce sujet qui semble hors de portée. Kong se dédie à aider les femmes autour du monde à apprendre comment investir de façon accessible et simple, et utilise son livre comme canal de savoir. Le ton convivial et amical de l\'oeuvre permet aux lectrices de sentir une certaine proximité avec Kong, comme s’il s’agissait d’une conversation entre des amies. Se faisant, l’autrice participe à outiller les femmes dans le monde de l’investissement et à réduire l’écart de rémunération homme-femme.</p><p>Dans ses débuts, Karman Kong crée une page Instagram, dédiée à construire une communauté de femmes qui s’intéressent à la finance, de femmes qui pourraient s’entraider à naviguer le vaste système de l’investissement. Se faisant, elle rend un sujet habituellement effrayant et inconnu plus accessible, démystifié et même amusant. Sa page Instagram, créée en 2021, a aujourd’hui plus de 48 000 abonnés et accompagne les femmes dans leur cheminement financier! On y voit passer des icons de la culture populaire féminine comme Elle Woods, Barbie, Lizzo et bien d’autres. Bien qu’elle se concentre principalement sur l’investissement, la page aborde une vaste étendue de sujets comme les élections, la psychologie, les régimes de protection, des entreprises en plein essor, et bien d’autres!</p><p>Le livre de Karman Kong est exhaustif et explore le monde financier de A à Z. Que ce soit pour se débarrasser de ses dettes ou bien pour savoir où, comment et quand investir ou épargner, l’autrice vous accompagne à chaque étape de votre parcours. Elle explore le sujet sous ses volets chiffrés et théoriques, mais aussi psychologiques et sociaux. Son œuvre est à la fois une réflexion critique de la société et un guide réussi.</p>',
        },
        {
            id: 3,
            title: 'Journée internationale des droits de la femme',
            image: '/images/blogs/jour.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '8 mars. 2024',
            content: 'En cette journée internationale des droits de la femme, nous vous partageons les grandes lignes du parcours ardu qu’a pris l’évolution des droits des Canadiennes. En passant par différentes vagues d’un féminisme à plusieurs facettes, grâce aux efforts des Suffragettes, de groupes activistes de femmes Autochtones, la montée du féminisme noir et biens d’autres acteurs ou mouvements sociaux marquants, nous sommes aujourd’hui un peu plus proche d’une égalité fondamentale.',
        },
        {
            id: 4,
            title: 'La marche annuelle commémorative pour les femmes autochtones disparues',
            image: '/images/blogs/marche.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '15 févr. 2024',
            content: 'Cette marche du 14 février réunit des alliés à travers le Canada et les États-Unis pour honorer la mémoire des femmes, filles et personnes de la communauté LGBTQ+ autochtones portées disparues et assassinées. Cette crise est contestée pacifiquement, entre autres, par le mouvement Missing and Murdered indigenous Women (MMIW). Nous prenons donc cette date et notre plateforme afin de partager avec vous leur mission.\n' +
                '\n' +
                '\n' +
                'Alliés au travers du drame\n' +
                '\n' +
                'Il existe plusieurs groupes militants et acteurs qui s’allient au mouvement, à sa lutte et à ses dénonciations. On peut penser aux groupes Femmes autochtones du Québec (FAQ), l’Association des femmes autochtones du Canada (AFAC) ou bien Idle No More (Jamais plus l’inaction), un mouvement dont l’une des principales revendications est de mettre fin aux disparitions et aux assassinats des femmes et filles autochtones. \n' +
                '\n' +
                'En 2019, Rosalie Fish, une coureuse adolescente à Washington a profité de l’attention qu’elle avait durant une course médiatisée pour envoyer un message et dédier sa course à la cause : elle peint une main rouge sur son visage. La jeune coureuse ayant été prise en photo, le cliché est devenu viral. Aujourd’hui, ce signe de solidarité est associé aux voix brimées des Autochtones. \n' +
                '\n' +
                'Des installations d’art commémoratives tels « The REDress Project » ou bien « Walking With Our Sisters » visent à sensibiliser et informer, tout en étant des rappels visuels frappants de la crise. Des auteurs comme Pamela Palmer ou des cinéastes comme Obomsawin quant-à-elles usent de leur position favorisée pour donner une voix au mouvement et dénoncer les enjeux du sujet.\n' +
                '\n' +
                '\n' +
                'Des lacunes systémiques\n' +
                '\n' +
                'Bien que le mouvement ait ses alliés, il dénonce aussi ses adversaires, notamment la police, qui porte un lourd fardeau dans la crise soulevée par MMIW. En effet, elle néglige la protection des femmes autochtones contre la violence en refusant de prendre au sérieux les plaintes déposées et les enquêtes entreprises, ou bien faillit d’inculper les meurtriers. Les données en lien avec la crise sont d’ailleurs peu nombreuses, ce qui est un enjeu en soi pour le mouvement. À peine 1200 femmes autochtones ont été portées disparues ou assassinées entre 1980 et 2012 selon la Gendarmerie royale du Canada (GRC), alors que les groupes de femmes autochtones affirment qu’il y en a plutôt plus de 4000. Ces incohérences flagrantes témoignent donc d’une lacune importante du système de la GRC. \n' +
                '\n' +
                'Ajoutons que les crimes contre les femmes autochtones sont souvent sous-dénoncés dans les médias, ce qui contribue à normaliser la perspective selon laquelle les crimes contre les peuples autochtones n’ont pas d’importance, d’autant plus que les femmes et filles autochtones sont 4.5 fois plus à risque de devenir victimes d’un homicide que d’autres femmes au Canada.\n' +
                '\n' +
                '\n' +
                'Un rapport qui en dit long\n' +
                '\n' +
                'On ne peut aborder ces enjeux sans soulever le rapport final sur l’Enquête nationale canadienne sur les femmes et les filles autochtones disparues et assassinées, intitulé « Réclamer notre pouvoir et notre place » (2019). Celui-ci conclut que le colonialisme et les nombreuses entraves aux droits fondamentaux des personnes autochtones sont les causes principales de la violence contre les femmes autochtones au Canada. Pensons à comment, à la suite de la colonisation, les femmes autochtones se sont fait retirer leur pouvoir décisionnel en politique et, depuis, tentent de compenser ce déficit en s’impliquant partout ailleurs pour se réapproprier ce droit perdu. C’est le cas, notamment, de FAQ, qui s’implique activement dans le dossier de MMIW, ou bien du mouvement Idle No More. \n' +
                '\n' +
                '\n' +
                'Ce rapport a éveillé plusieurs personnes aux atrocités que vivent les communautés autochtones et légitimer les revendications des mouvements comme MMIW, mais il ne fait que marquer le début du long chemin qu’il reste encore à faire. Nous vous invitons donc à prendre cette journée pour discuter avec vos proches, échanger et vous sensibiliser à la menace qui guette les communautés autochtones. ',
        },
        {
            id: 5,
            title: 'Polytechnique, l’histoire d’un drame, mais aussi l’histoire de leurs vies',
            image: '/images/blogs/poly.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '6 déc. 2023',
            content: 'Année après année vous avez écho de la tragédie qui a frappé l’école Polytechnique le 6 décembre 1989. Ce féminicide de masse qui, il y a 34 ans, laisse dans le deuil les familles de 14 femmes incroyables, se voit parsemé à travers le pays par les histoires des vies perdues. Nous décidons, aujourd’hui, de prendre notre voix afin d’honorer le vécu de ses femmes, leurs accomplissements et leur parcours. N’oublions jamais qu’elles étaient, comme vous et moi, humaines, curieuses et allumées par un feu de passion pour la vie.\n' +
                '\n' +
                ' \n' +
                'Nathalie Provost\n' +
                '\n' +
                'Une des survivantes blessées, Nathalie avait tenté de sauver sa vie et celles des autres étudiantes. Elle a tenté de raisonner avec le tueur : « Écoutez, nous sommes juste des femmes étudiant l\'ingénierie, pas forcément des féministes prêtes à marcher dans les rues criant que nous sommes contre les hommes, juste des étudiantes cherchant à mener une vie normale ». Lépine ne se montrera pas coopératif et rétorquera : « Vous êtes des femmes, vous allez devenir des ingénieures. Vous n\'êtes toutes qu\'un tas de féministes, je hais les féministes ». Déterminée à terminer son baccalauréat elle est de retour sur les bancs d’école à peine un mois plus tard et reçoit la Médaille de la Bravoure du Canada pour son sang-froid. Aujourd’hui encore, Nathalie milite pour le contrôle d’arme à feu, mais aussi pour d’autres causes qui lui tiennent à cœur, comme la justice climatique.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Geneviève Bergeron (née en 1968, 21 ans)\n' +
                '\n' +
                'Cette femme, brillante, jouait la clarinette et chantait dans une chorale professionnelle. Jumelé à son amour de la musique, elle jouait au basketball et nageait beaucoup. Elle passait des après-midis à garder l’enfant de Jean Doré, maire de Montréal à l’époque, qu’elle avait d’ailleurs aidé dans sa campagne électorale. C’était sa deuxième année en génie mécanique. Elle adorait voyager et revenait d’un séjour au Maroc. Sa sœur raconte que Geneviève savait faire sentir chaque personne qu’elle rencontrait comme importante et valorisée.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Hélène Colgan et Nathalie Croteau (nées en 1966, 23 ans)\n' +
                '\n' +
                'Meilleures amies, elles meurent main dans la main le 6 décembre alors qu’elles étudiaient ensemble en génie mécanique. Elles avaient planifié partir en voyage avec d’autres amis au Mexique pour célébrer le nouvel an.\n' +
                '\n' +
                'Hélène pensait à aller travailler près de Toronto, dans une firme qui lui avait offert un emploi. Elle était à sa dernière année en génie mécanique et avait dans ses plans la poursuite d’une maîtrise.\n' +
                '\n' +
                'Nathalie, quant à elle, outre sa passion pour la science, était impliquée chez les cadets de l’air et à l’école secondaire Antoine-Brossard. Aujourd’hui on retrouve à Brossard, sa ville natale, un centre communautaire nommé en sa mémoire.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Barbara Daigneault (née en 1967, 22 ans)\n' +
                '\n' +
                'Comme Geneviève, Barbara avait une passion pour la musique. Elle jouait du piano, du violon et de la contrebasse. Son père affirme que son cœur a arrêté de battre le jour où sa fille est morte. Il décède d’une crise cardiaque quelques années plus tard. Barbara suivait les traces de son père, fondateur du département de génie mécanique à l\'École de technologie supérieur et travaillait pour lui comme auxiliaire en enseignement. Ils travaillaient ensemble à finaliser le projet de maîtrise de sa fille. Sa famille a créé en sa mémoire le Fonds Barbara-Daigneault qui vise la récompense d’une étudiante en génie de l’ETS annuellement.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Anne-Marie Edward (née en 1968, 21 ans)\n' +
                '\n' +
                'Passionnée de la vie, elle ajoute à ses études en génie chimique des passe-temps comme le tennis, le kayak, les échecs, le baseball, le soccer et l’escalade. C’est son amour pour le ski, en particulier, qui se démarquait chez Anne-Marie. Elle fut enterrée avec son manteau d’équipe et ses pairs lui ont porté mémoire en arborant ses initiales sur leur uniforme de ski à la suite de sa mort. Aujourd’hui le pavillon des sciences du collège John-Abbott porte son nom.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Maud Haviernick (née en 1960, 29 ans) et Michèle Richard (née en 1968, 21 ans)\n' +
                '\n' +
                'Elles sont décédées ensemble alors qu’elles faisaient une présentation devant leur classe.\n' +
                '\n' +
                'Maud était déjà diplômée en design de l’environnement de l’UQAM, mais avait décidé de retourner à l’école, elle rêvait de devenir ingénieure. Aujourd’hui, il existe une bourse à l’UQAM pour les étudiantes en design de l’environnement, nommée en sa mémoire. Sa sœur, Sylvie, est aussi cofondatrice de la Fondation des victimes du 6 décembre qui entreprend une lutte pour un meilleur contrôle des armes à feu au Canada.\n' +
                '\n' +
                'Surnommée Mimi, Michèle retournait annuellement à Lac-Mégantic pour visiter sa famille et ses amis. Bien qu’elle eût eu une relation difficile avec son père plus jeune, elle venait de se réconcilier avec lui dans le but de l’avoir dans sa vie, et peut-être même à son mariage, lequel elle espérait planifier sous peu avec son copain Stéphane. Stéphane, qui étudiait en génie métallurgique avec elle, était dans la classe avec elle lorsqu’elle fut tuée.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Barbara Klucznik-Widajewicz (née en 1958, 31 ans)\n' +
                '\n' +
                'Originaire de Pologne, elle immigre au Canada en 1987 pour fuir son pays sous loi martiale. Connue pour son sarcasme et sa chaleur humaine, elle parlait 5 langues et adorait aider les autres. Elle était économiste de formation, mais voulu changer de carrière et donc s’aventura dans le domaine des sciences infirmières à l’Université de Montréal. Son mari, aussi étudiant, sera témoin du meurtre de sa femme à la cafétéria de la Polytechnique. Aujourd’hui le massacre de sa femme le hante encore et il craint le même sort pour sa fille.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Maryse Laganière (née en 1964, 25 ans)\n' +
                '\n' +
                'Maryse était une employée de la Polytechnique et venait de se marier à Jean-François. Tous deux voulaient créer une vie ensemble, se construire un chez-soi et former une famille. Le veuf raconte : « Ce matin-là, je suis resté là, comme si j\'étais triste de la voir partir. Je ne comprenais pas pourquoi. Elle s\'est retournée en chemin et m\'a regardé avec un air interrogateur. Je l\'ai saluée une deuxième fois. C\'est ce que j\'attendais. Mais aujourd\'hui, je réalise que je voulais la saluer une dernière fois. ». Jean-François raconte qu’ils essayaient activement de créer une famille, et que le jour de son décès, Maryse, en retard de 5 jours, était probablement enceinte. Aujourd’hui encore il porte son alliance.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Maryse Leclair (née en 1966, 23 ans)\n' +
                '\n' +
                'Maryse aimait la musique punk, particulièrement du mouvement New Wave. Elle planifiait voyager à travers le monde avec son amoureux Benoit. L’étudiante en génie métallurgique devait faire une présentation devant sa classe cette journée-là, elle fut la dernière victime de Lépine, qu’il achève à coups de couteau. C’est son père, policier, qui retrouvera son corps à côté de celui du tueur. Son père témoigne de l’audace de sa fille, laquelle n’hésitait pas à s’aventurer dans des domaines traditionnellement réservés aux hommes, ayant même tenté de devenir officier des Forces armées canadiennes.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Anne-Marie Lemay (née en 1967, 22 ans)\n' +
                '\n' +
                'Anne-Marie espérait un jour pouvoir utiliser ses études en génie mécanique pour participer à l’innovation de prothèses pour différents handicaps. Elle était poussée par l’histoire de son ami qui, plus jeune, avait perdu l’usage de ses jambes. Non seulement était-elle engagée dans la vie étudiante de la Polytechnique, mais elle participait aussi à une chorale. Elle laisse dans le deuil une amie d’enfance qui, depuis, cumule les dépressions nerveuses. Elle n’a plus jamais retrouvé le goût de vivre. Anne-Marie fut tuée devant son amoureux. Un parc derrière l’école secondaire de Mortagne porte aujourd’hui son nom.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Sonia Pelletier (née en 1961, 28 ans)\n' +
                '\n' +
                'Sonia aimait dessiner, cuisiner et coudre. À la suite de sa technique en architecture, elle était venue étudier en génie mécanique. Fidèle à son caractère altruiste, elle s’était rendue à l’école cette journée là pour assister aux présentations de ses collègues alors qu’elle avait déjà terminé le cours. Cette journée-là, sa coloc était venue la chercher à l’école, sans savoir qu’elle était décédée. Aujourd’hui, en sa mémoire, est érigé le parc Sonia-Pelletier à Saint-Ulric, où elle est née.\n' +
                '\n' +
                '                          \n' +
                '\n' +
                'Annie St-Arneault (née en 1966, 23 ans)\n' +
                '\n' +
                'Annie, en plus d’étudier en génie mécanique, était passionnée de poésie. Son frère a d’ailleurs partagé en son honneur quelques-unes de ses œuvres lors d’une soirée de poésie. Elle était connue de ses collègues de classe pour son grand cœur et sa bonne humeur. À son intérêt pour la science se jumelait une passion des arts. C’était censé être son dernier cours avant de graduer. À la suite de ses études, elle planifiait soit rejoindre son frère en Afrique, soit aller travailler dans une fonderie d’aluminium.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Annie Turcotte (née en 1969, 20 ans)\n' +
                '\n' +
                'C’était la plus jeune victime de Lépine et, 8 ans après le drame, vous pouviez entrer dans sa chambre encore intouchée, comme si cette fameuse journée n’avait jamais eu lieu. Emportés par le chagrin, ses parents ont gardé les quartiers de leur fille identiques, prêt pour le retour de celle-ci. Ils retrouvent d’ailleurs dans ses choses une lettre écrite par la jeune fille du haut de ses 17 ans : « Je n\'ai pas peur de la mort, j\'ai peur des souffrances qui l\'entourent. J\'espère de mourir dans une sorte d\'accident, en pleine action ». Les parents d’Annie trouvent consolation en se disant que leur fille les a quittés comme elle le voulait. De son vivant, Annie enseignait la natation à des enfants et poursuivait ses études en génie métallurgique dans le but d’éventuellement utiliser ses apprentissages dans sa lutte pour l’environnement.',
        },
        {
            id: 6,
            title: 'Journée internationale pour l\'élimination de la violence à l\'égard des femmes',
            image: '/images/blogs/inter.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '25 nov. 2023',
            content: 'L’origine de cette date commémorative\n' +
                '\n' +
                'Prendre le temps d’observer les chiffres, c’est de voir que près d’une femme sur trois a été victime d’une forme de violence, soit physique ou sexuelle, dans sa vie. La plupart du temps, par son partenaire. C’est d’apprendre que plus de cinq femmes ou filles sont tuées toutes les heures par un membre de leur propre famille. C’est de réaliser que 86% des femmes et des filles vivent dans des pays où il n’existe pas de protection juridique contre la violence fondée sur le sexe. Selon les Nations Unies, cette réalité est l’une des violations des droits de l’homme les plus répandues dans le monde.\n' +
                '\n' +
                '\n' +
                'Les Nations Unies ont créé cette journée commémorative en 1999. La date fut choisie afin d’honorer la mémoire des sœurs Mirabal, militantes de la République dominicaine, brutalement assassinées à coup de machettes en 1960 sur les ordres du chef de l’État, Rafael Leonidas Trujillo. Au Québec, la tradition veut qu’on honore les 12 jours qui séparent cette date à celle du 6 décembre, soit la journée qui marque le féminicide de masse de l’École Polytechnique.\n' +
                '\n' +
                '\n' +
                'La pandémie : son effet sur les violences conjugales\n' +
                '\n' +
                'Outre les conflits, les changements climatiques ou l’origine ethnique, il existe plusieurs facteurs qui intensifient la violence que vivent les femmes dans le monde, et la pandémie de Covid-19 en fait partie. Pensons à Sylvie Bisson et sa fille Myriam Dallaire, tuées à coup de hache par l’ex-conjoint de cette dernière dans la municipalité de Sainte-Sophie. Des atrocités qui témoignent de l’augmentation de la violence à l’égard des femmes et des filles durant la pandémie. Une étude de l’université de Sherbrooke démontre d’ailleurs que le nombre de féminicides au Québec a atteint un sommet en 2021. Sans compter que dernière chacun de ces homicides, se cache près de 3000 autres femmes victimes de violence conjugale. L’isolation chez soi qui a résulté des confinements durant la pandémie fut aussi un fléau pour les femmes à travers le monde. En novembre 2022 sort une étude qui souligne que 56% des féminicides à l’international ont été causés par un conjoint intime ou un autre membre de la famille. La conception que même le foyer d’une femme ne lui permet pas d’être en sécurité donne froid dans le dos. Ces chiffres sont d’ailleurs sans compter les femmes qui passent sous les radars de l’État. Pensons notamment aux femmes portées disparues et assassinées au Canada qui, selon la GRC, sont à peine 1200 entre 1980 et 2012, mais dont les groupes de femmes autochtones affirment, au contraire, sont plus de 4000.\n' +
                '\n' +
                '\n' +
                'Des avancées dans la lutte contre la violence conjugale au Québec\n' +
                '\n' +
                'Malgré cette triste réalité, nous pouvons observer des améliorations et du progrès quant à la prévention et à la réparation de la violence que vit la gent féminine dans le monde. En mars 2021, par exemple, entrent en vigueur des modifications à la Loi sur le divorce qui peuvent représenter la différence entre la vie et la mort pour des femmes québécoises. L’article 8 de la Loi sur le divorce prend maintenant en compte la violence intrafamiliale comme motif pour déclarer l’échec du mariage. Le législateur donne ainsi une porte de sortie aux victimes qui ne peuvent se permettre d’attendre un an de vie séparée avant de demander le divorce. C’est un pas vers une monde sécuritaire pour la femme.\n' +
                '\n' +
                'D’autre part, le 26 novembre 2021 est adopté à l’unanimité par l’Assemblée nationale le projet de loi 92. Il vise la création d’un tribunal spécialisé en matière de violence sexuelle et de violence conjugale.  Ce projet est adopté à la suite des recommandations du rapport Rebâtir la confiance, rédigé par le Comité d’experts sur l’accompagnement des personnes victimes d’agressions sexuelles et de violence conjugale. C’est un autre exemple de progrès pour la sécurité des femmes dont, nous l’espérons, le fruit se fera sentir sous peu.',
        },
        {
            id: 7,
            title: '3 bonnes nouvelles pour le mouvement féministe',
            image: '/images/blogs/trois.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '9 nov. 2023',
            content: 'Mères au front\n' +
                '\n' +
                '« Ça suffit. Nous, mères et grands-mères, montons au front.Nous passons à l’action pour protéger l’avenir de nos enfants de la crise climatique. »\n' +
                '\n' +
                ' \n' +
                '\n' +
                'C’est le message que l’on peut lire sur la page d’accueil du groupe Mères au front. Comme illustré plus tôt, ces femmes s’allient ensemble à travers le pays pour défendre l’environnement et le futur de leurs enfants. Elles ont comme mission de protéger la santé et la sécurité des générations à venir et insistent que tout est lié : santé et environnement, sécurité et résilience, protection et solidarité.\n' +
                '\n' +
                'Elles ont plusieurs revendications envers l’État, dont leur plus récente qui visait la ville de Rouyn-Noranda, où le gouvernement peine à faire respecter la limite de 3ng/m3 dans l’air. Elles ont organisé un die-in, une forme de protestation où les participants simulent la mort, devant le bureau du premier ministre Legault, réclamant le droit fondamental de la population à un environnement sain\n' +
                '\n' +
                '\n' +
                'Pussy Riot\n' +
                '\n' +
                'Ce groupe de Punk Rock féministe Russe voit le jour à Moscou en 2011. Elles défendent les droits des femmes en Russie au travers de performances artistiques interdites. 2 d’entre elles vont d’ailleurs être emprisonnées dans un camp de travail pendant 2 ans, en 2012, pour « vandalisme » et « incitation à la haine religieuse ». Ces femmes utilisent l’art pour dénoncer et provoquer l’État policier. En 2023, elles reçoivent le prix Woody Guthrie 2023 pour honorer leur esprit de résistance par la musique et leurs performances.\n' +
                '\n' +
                'Vous pouvez vous rendre au Musée d’Art Contemporain à la Place Ville Marie afin d’assister à leur toute nouvelle exposition : Terrorisme de velours : la Russie des Pussy Riot, qui rend hommage au groupe et à ses protestations artistiques.\n' +
                '\n' +
                '\n' +
                'La Cour suprême : une représentation historique\n' +
                '\n' +
                'Une bonne nouvelle pour la représentation de femmes dans les hautes sphères juridiques : une majorité de femmes siège à la Cour suprême pour la première fois de son histoire. La juge Moreau, une francophone qui était juge en chef de la Cour du Banc du Roi de l’Alberta, devient la cinquième juge femme à la Cour suprême du Canada. C’est non seulement une marque importante dans l’histoire du féminisme canadien, mais aussi un évènement important pour les communautés francophones au Canada. En effet, Mary Moreau porte à cœur l’accès aux services juridiques en français et a notamment participé à la fondation de l’Association des juristes d’expression française de l’Alberta. ',
        },
        {
            id: 8,
            title: 'Le coût de la Guerre pour les femmes',
            image: '/images/blogs/guerre.png',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '8 nov. 2023',
            content: 'Exécutions arbitraires, actes de torture, violences sexuelles, mariages forcés, trafic et traite d’êtres humains. Ces actes qui semblent sortir d’histoires d’horreur sont la réalité de bien des femmes et filles en temps de guerre. Que ce soit il y a 100 ans, ou aujourd’hui, lors de conflits la discrimination et les injustices auxquelles les femmes font face s’aggravent de façon importante.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'Ces violences basées sur le genre sont un problème de santé mondiale et une violation des droits humains. Elles peuvent se manifester par la misogynie systématique dans les hautes sphères dirigeantes ou bien encore par la détention, le viol et la mutation génitale de femmes de camps adverses. Des soldats russes en Ukraine équipés de viagra ou les viols de masse des femmes allemandes par l’armée rouge en 1945 sont des exemples de stratégies militaires où les femmes sont instrumentalisées et utilisées comme objets.\n' +
                '\n' +
                ' \n' +
                '\n' +
                'L’injustice ne s’arrête pas là. En effet, l’accès aux services de protection et de santé reproductive est aussi compromis lors de conflits. Il existe, toutefois, des organismes comme l’UNFPA qui travaillent pour pallier ces problèmes et tentent de donner accès aux services de protection et de santé reproductive aux femmes de zones isolées. Ou bien encore OXFAM qui travaille à sensibiliser et informer les gens sur le prix que les femmes paient lors de conflits.',
        },
        // Add more articles as needed
    ]);

    return (
        <ArticlesContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticlesContext.Provider>
    );
}

export function useArticles() {
    return useContext(ArticlesContext);
}