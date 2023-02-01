# https://www.youtube.com/watch?v=XVv6mJpFOb0
from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://en.cvbankas.lt/?location=&padalinys%5B%5D=&keyw=python').text

soup = BeautifulSoup(html_text, 'lxml')

job = soup.find('article', class_='list_article list_article_rememberable jobadlist_list_article_rememberable')

company_name = job.find('span', class_='dib mt5').text.replace(' ', '')
job_title = job.find('h3', class_='list_h3').text
published_date = job.find('span', class_='txt_list_2').text
salary = job.find('span', class_='salary_amount')
if salary is None:
    salary = "not specified"
else:
    salary = job.find('span', class_='salary_amount').text

print(f'''
Company Name: {company_name}
Job Title: {job_title}
Published: {published_date}
Moka: {salary}
''')
