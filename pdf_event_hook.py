import logging

from bs4 import BeautifulSoup
from mkdocs.structure.pages import Page

def inject_link(html: str, href: str, page: Page, logger: logging) -> str:
    soup = BeautifulSoup(html, 'html.parser')
    footer = soup.select('.md-footer-copyright')
    if footer and footer[0]:
        container = footer[0]
        # Do not generate the link in the footer
        # container.append(' ... ')
        # a = soup.new_tag('a', href=href, title='PDF',
        #                         download=None, **{'class': 'link--pdf-download'})
        # a.append('download PDF')
        # container.append(a)
        return str(soup)
    return html
