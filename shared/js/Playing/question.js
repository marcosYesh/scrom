/**
 * 
 */
var teste = "";
var QUESTION_TYPE_CHOICE = "choice";
var QUESTION_TYPE_TF = "true-false";
var QUESTION_TYPE_NUMERIC = "numeric";
var questions = "";
$(function() {
	teste = new Test();
	teste = carregarTeste(teste);
	questions = teste.getQuestions()
    carregarQuestao(questions);
});

function carregarQuestao(questions) {
	$("#dvTeste").html($("#questionTLP").tmpl(questions));
}

function carregarTeste(test) {
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_1",
					"Qual é o melhor argumento para explicar a tecnologia Ultra HD 4K?",
					QUESTION_TYPE_CHOICE,
					new Array(
							"Ultra HD 4k é a melhor resolução e o novo padrão de qualidade de imagem. Com mais de 8 milhões de pixels, ela entrega 4 vezes mais definição que o Quad HD, as imagens reproduzidas possuem um nível incrível de detalhes. Quanto menor o pixel, maior é o detalhamento na imagem, o que proporciona um melhor conforto visual.  Devido ao tamanho dos pixels, você pode ter um televisor maior em um ambiente menor!",
							"Ultra HD 4k é a melhor resolução e o novo padrão de qualidade de imagem. Com mais de 4 milhões de pixels, ela entrega 8 vezes mais definição que o Full HD, as imagens reproduzidas possuem um nível incrível de detalhes. Quanto menor o pixel, maior é o detalhamento na imagem, o que proporciona um melhor conforto visual.  Devido ao tamanho dos pixels, você pode ter um televisor maior em um ambiente menor!",
							"Ultra HD 4k é a melhor resolução e o novo padrão de qualidade de imagem. Com mais de 8 milhões de pixels, ela entrega 4 vezes mais definição que o Full HD, as imagens reproduzidas possuem um nível incrível de detalhes. Quanto menor o led, maior é o detalhamento na imagem, o que proporciona um melhor conforto visual.  Devido ao tamanho dos pixels, você pode ter um televisor maior em um ambiente menor!",
							"Ultra HD 4K é a melhor resolução e o novo padrão de qualidade de imagem. Com mais de 8 milhões de pixels, ela entrega 4 vezes mais definição que o Full HD, as imagens reproduzidas possuem um nível incrível de detalhes. Quanto menor o pixel, maior é o detalhamento na imagem, o que proporciona um melhor conforto visual.  Devido ao tamanho dos pixels, você pode ter um televisor maior em um ambiente menor!"),
					        "Ultra HD 4K é a melhor resolução e o novo padrão de qualidade de imagem. Com mais de 8 milhões de pixels, ela entrega 4 vezes mais definição que o Full HD, as imagens reproduzidas possuem um nível incrível de detalhes. Quanto menor o pixel, maior é o detalhamento na imagem, o que proporciona um melhor conforto visual.  Devido ao tamanho dos pixels, você pode ter um televisor maior em um ambiente menor!",
					"obj_playing");

	test
			.add(
					"com.scorm.golfsamples.interactions.playing_2",
					"Qual é o melhor argumento para explicar o painel IPS?",
					QUESTION_TYPE_CHOICE,
					new Array(
							"Só com o painel mais avançado você tem a máxima qualidade de imagem! Agora você pode aproveitar o momento e relaxar assistindo o TV de qualquer ângulo, sem perder a qualidade de imagem. Os Painéis IPS dos TVs Ultra HD 4K LG não sofrem variação nas cores, e isso deixa o ângulo de visão muito menor com uma fidelidade de cores de até 60% mantida mesmo a 95°.",
							"Só com o painel mais avançado você tem a máxima qualidade de imagem! Agora você pode aproveitar o momento e relaxar assistindo o TV do mesmo ângulo, sem perder a qualidade de imagem. Os Painéis IPS dos TVs Ultra HD 4K LG sofrem variação nas cores, e isso deixa o ângulo de visão muito maior com uma fidelidade de cores de até 95% mantida mesmo a 60°.",
							"Só com o painel mais avançado você tem a máxima qualidade de imagem! Agora você pode aproveitar o momento e relaxar assistindo o TV de qualquer ângulo, sem perder a qualidade de imagem. Os Painéis IPS dos TVs Ultra HD 4K LG não sofrem variação nas cores, e isso deixa o ângulo de visão muito menor com uma fidelidade de cores de até 95% mantida mesmo a 60°.",
							"Só com o painel mais avançado você tem a máxima qualidade de imagem! Agora você pode aproveitar o momento e relaxar assistindo o TV de qualquer ângulo, sem perder a qualidade de imagem. Os Painéis IPS dos TVs Ultra HD 4K LG não sofrem variação nas cores, e isso deixa o ângulo de visão muito maior com uma fidelidade de cores de até 95% mantida mesmo a 60°."),
					"Só com o painel mais avançado você tem a máxima qualidade de imagem! Agora você pode aproveitar o momento e relaxar assistindo o TV de qualquer ângulo, sem perder a qualidade de imagem. Os Painéis IPS dos TVs Ultra HD 4K LG não sofrem variação nas cores, e isso deixa o ângulo de visão muito maior com uma fidelidade de cores de até 95% mantida mesmo a 60°.",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_3",
					"Os TVs UHD da LG possuem um filtro de cor mais espesso que permite reproduzir muito mais cores. A linha LG UHD TV 4K suporta a reprodução de conteúdo no padrão BT.2020 e entrega até?",
					QUESTION_TYPE_CHOICE,
					new Array(
							"35% mais fidelidade de cor que o padrão atual BT.709.",
							"25% mais fidelidade de cor que o padrão atual BT.709.",
							"60% mais fidelidade de cor que o padrão atual BT.709.",
							"95% mais fidelidade de cor que o padrão atual BT.709."),
					"25% mais fidelidade de cor que o padrão atual BT.709.",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_4",
					"Por meio da função _____________, o televisor ajusta o brilho automaticamente por todo o painel através da divisão em blocos. O resultado é um contraste maior e um brilho mais fiel, deixando o preto mais puro e um branco mais intenso.",
					QUESTION_TYPE_CHOICE, new Array("Nano Cell",
							"Dolby Vision", "Local Dimming", "IPS"),
					"Local Dimming", "obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_5",
					"A captação de imagem na produção de filmes está muito mais evoluída. O conteúdo em HDR entrega mais qualidade de brilho e contraste, com uma riqueza de detalhes nunca vista antes. Quais televisores da LG suportam a tecnologia HDR10?",
					QUESTION_TYPE_CHOICE,
					new Array(
							"Todos TVs UHD 4K da LG suportam a tecnologia HDR10.",
							"Todos TVs da LG suportam a tecnologia HDR10.",
							"Todos TVs Super UHD 4K da LG suportam a tecnologia HDR10.",
							"Todos TVs UHD 4K da LG a partir de 49” suportam a tecnologia HDR10."),
					"Todos TVs UHD 4K da LG suportam a tecnologia HDR10.",
					"Todos TVs UHD 4K da LG suportam a tecnologia HDR10.",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_6",
					"Referente ao sistema webOS, é certo afirmar:",
					QUESTION_TYPE_CHOICE,
					new Array(
							"A primeira plataforma multitarefas, revolucionária e intuitiva. Esse ano a LG evoluiu trazendo a versão webOS 3.5. É tudo que uma Smart TV precisa ser! A LG fez a plataforma webOS para facilitar a usabilidade dos TVs. Para isso, o Bean Bird ajuda durante a configuração inicial do televisor. E navegue pelo Launcher com praticidade, com o menu que permite acessar seus conteúdos e aplicativos com apenas um clique.",
							"A primeira plataforma multitarefas, revolucionária e intuitiva. Esse ano a LG evoluiu trazendo a versão webOS 3.0. É tudo que uma Smart TV precisa ser! A LG fez a plataforma webOS para facilitar a usabilidade dos TVs. Para isso, o Bean Bird ajuda durante a configuração inicial do televisor. E navegue pelo Launcher com praticidade, com o menu que permite acessar seus conteúdos e aplicativos com apenas um clique.",
							"A primeira plataforma multitarefas, revolucionária e intuitiva. Esse ano a LG evoluiu trazendo a versão webOS 3.5. É tudo que uma Smart TV precisa ser! A LG fez a plataforma webOS para facilitar a usabilidade dos TVs. Para isso, o Bean Bird ajuda durante a configuração inicial do televisor. E navegue pelo Quick Access com praticidade, com o menu que permite acessar seus conteúdos e aplicativos com apenas um clique.",
							"A primeira plataforma multitarefas, revolucionária e intuitiva. Esse ano a LG evoluiu trazendo a versão webOS 3.5. É tudo que uma Smart TV precisa ser! A LG fez a plataforma webOS para facilitar a usabilidade dos TVs. Para isso, o Bean Bird ajuda durante toda utilização do televisor. E navegue pelo Launcher com praticidade, com o menu que permite acessar seus conteúdos e aplicativos com apenas um clique."),
					"A primeira plataforma multitarefas, revolucionária e intuitiva. Esse ano a LG evoluiu trazendo a versão webOS 3.5. É tudo que uma Smart TV precisa ser! A LG fez a plataforma webOS para facilitar a usabilidade dos TVs. Para isso, o Bean Bird ajuda durante a configuração inicial do televisor. E navegue pelo Launcher com praticidade, com o menu que permite acessar seus conteúdos e aplicativos com apenas um clique.",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_7",
					"Por meio do ___________, acessar seus aplicativos preferidos ficou muito mais fácil! Basta um clique! Tenha acesso fácil e rápido para seus conteúdos mais frequentes!  Você pode adicionar seus aplicativos e canais favoritos como atalhos.",
					QUESTION_TYPE_CHOICE, new Array("Launcher",
							"Acesso Rápido", "Quick Acesso", "Quick Access"),
					"Quick Access", "obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_8",
					"Você consegue registrar até 20 canais por meio do guia de programação. Você pode gravar tanto a imagem inteira quanto a área com zoom em um pen drive ou HD externo. Para quem gosta de cantar, é possível seguir a letra na tela como um karaokê. Descubra conteúdos similares aos que você gosta de assistir, o seu televisor te dará as melhores opções, sem esforço algum. É possível compartilhar seus conteúdos de maneira fácil e rápida, com suporte a até 4 dispositivos simultâneos. E tem novidade, agora também tem suporte para iPhone!Lendo a descrição a cima, estamos falando de:",
					QUESTION_TYPE_CHOICE,
					new Array(
							"Meus Canais, Live Zoom, Magic Link e Magic Mobile Connection.",
							"Meus Canais, Magic Zoom, Music Player, Magic Link e Magic Mobile Connection.",
							"Meus Canais, Live Zoom, Music Player, Magic Link e Magic Mobile Connection.",
							"Launcher, Live Zoom, Music Player, Magic Link e Magic Mobile Connection."),
					"Meus Canais, Live Zoom, Music Player, Magic Link e Magic Mobile Connection.",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_9",
					"E não podemos deixar de falar da elegância que os TVs da LG tem, não é mesmo? O Design _________ dos Televisores não são só muito bonitos, eles também proporcionam melhor qualidade de imagem.",
					QUESTION_TYPE_CHOICE, new Array("Ultra Slim", "Slim",
							"Fine Slim", "Blade Slim"), "Ultra Slim",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_10",
					"Com o avanço dos pontos quânticos, a LG inovou mais uma vez. Você tem muito mais cores na imagem graças as nano partículas adicionadas diretamente no painel IPS. Além de oferecer cores mais precisas, você tem um amplo ângulo de visão. Esta descrição se refere a qual tecnologia?",
					QUESTION_TYPE_CHOICE, new Array("Quantum IPS",
							"Dolby Vision", "Ultra HD 4K", "Nano Cell"),
					"Nano Cell", "obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_11",
					"Não basta entregar mais cores, é preciso entregá-las com alta fidelidade! Para isso, o __________ faz a calibração individual de todos os quadros dos seus conteúdos.",
					QUESTION_TYPE_CHOICE, new Array("Dolby Vision", "HDR10",
							"Ultra UHD 4K", "Nano Cell"), "Dolby Vision",
					"obj_playing");
	test
			.add(
					"com.scorm.golfsamples.interactions.playing_12",
					"Navegar no seu TV ficou muito mais fácil com os avanços do controle Smart Magic. Funciona como um mouse para seu TV. Este ano o Smart Magic ganhou novos recursos, quais foram?",
					QUESTION_TYPE_CHOICE,
					new Array(
							"Atalhos para Netflix e Amazon e a função Quick Access",
							"Atalhos para Netflix e YouTube e a função Quick Access",
							"Atalhos para Netflix, Amazon, YouTube e a função Quick Access",
							"Atalhos para Netflix e Amazon e a função Live Zoom"),
					"Atalhos para Netflix e Amazon e a função Quick Access",
					"obj_playing");

	return test;
}