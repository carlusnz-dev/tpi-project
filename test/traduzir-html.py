from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator

# Carregar o HTML
with open('./periodic-table.security.html', 'r', encoding='utf-8') as file:
    soup = BeautifulSoup(file, 'html.parser')

# Inicializar o tradutor
translator = GoogleTranslator(source='pt', target='en')

# Traduzir todas as tags de texto
for tag in soup.find_all(text=True):
    if tag.strip():  # Ignorar tags sem texto
        translated = translator.translate(tag)
        tag.replace_with(translated)

# Salvar o HTML traduzido
with open('seu_arquivo_traduzido.html', 'w', encoding='utf-8') as file:
    file.write(str(soup))
