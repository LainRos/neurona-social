// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of Discord that we will use to control the bot
const bot = new Discord.Client();

// Token for your bot, located in the Discord application console - https://discordapp.com/developers/applications/me/
const token = 'NDYwNTEyOTU0ODQ5NDI3NDU2.DhF2Tg.RdDwCyUGKxfMyG95oGLZFxoRgaM';

const puppeteer = require('puppeteer');
//aqui comienza el bot 
aprender =0;
$ultima_pregunta = ' ';
$autor = ' ';
bot.on('message', (message) => {

function play_this(url){ //reproducior audio 
	if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
		connection.playArbitraryInput(url);
          message.reply('Iniciando reproduccion');
        })
        .catch(console.log);
    } else {
      message.reply('No estas en un canl de voz');
    }
	
}

function php(msj){ 
(async () => {
		  const browser = await puppeteer.launch();
		  const page = await browser.newPage();
		  url2 = 'http://lsinonl.16mb.com/bot2/?q='+ escape(message.content);
		  await page.goto(url2);



		  // Obtener informacion de pagina web.
		  const dimensions = await page.evaluate(() => {
			return {
			  info: document.title
			};
		  });
		  console.log('Dimensions:', dimensions);
		  await browser.close();
		  message.channel.sendMessage(dimensions.info);
		})();
}

function pregunta(){ 
	 //Sacar pregunta del servidor 
		   (async () => {
		  const browser = await puppeteer.launch();
		  const page = await browser.newPage();
		  url2 = 'http://lsinonl.16mb.com/bot/pregunta.php';
		  await page.goto(url2);



		  // Obtener informacion de pagina web.
		  const dimensions = await page.evaluate(() => {
			return {
			  info: document.title
			};
		  });
		  return dimensions.info;
		  console.log('Dimensions:', dimensions);
		  await browser.close();
		})();
}






if (message.content === 'cual es mi avatar?') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
	//message.channel.sendMessage(message.author +' '+ message.content);
}
  
  if(message.author.bot){
	  
	  if(message.author.id === '460512954849427456'){ // id del bot
		  
	  }else{
		  /* informacion sobre otros bots que esten en el servidor
		  console.log('comprobado');
		  message.channel.sendMessage('Hit  this -> bot:'+message.author.bot);
		  message.channel.sendMessage('Is bot :'+message.author.id+' to feed this:');
		  message.channel.sendMessage(message.author+' hola');
	     console.log(message.author.id); //464279702052536330
		 */
	  }
	 
	  
  }else{
	  //Si es una persona entonces .......
	  //message.channel.sendMessage('Esta persona ha escrito esto:');
	  //message.channel.sendMessage(message.author +' '+ message.content);
	  
	  ///////comandos de pregunta
	  ///////////////
	  
	   
		
				 
				//Ejecusion principal
				
					c = message.content;
					c= c.substring(c.length,1);
					 //message.reply('msj: '+c);
					 $ultima_pregunta = c;
					 $autor = message.author;
					 php(message.content);
				if(message.content.indexOf("$") == 0){
				}
				
				//otros comandos
				if (message.content === 'play 1') {	  
					play_this('http://podsync.net/download/hJfLSARrn/bcHTl9h7TWI');
				  message.channel.sendMessage('YT 1 ok');
				}
		
  }//si es un parsona
  
  
  //comandos especiales
  
   if (message.content === '/ver') {	  
	  message.channel.sendMessage('Online 1.9.9.3');
  }
  
  if (message.content === '/cache') {	  
		  message.channel.sendMessage('RAM: '+$ultima_pregunta);
		  message.channel.sendMessage('AUT: '+$autor);
	  }
			
 
	
});

bot.login(token);

console.log('Lain Online');