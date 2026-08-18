import urllib.request, re
html = urllib.request.urlopen('https://linktr.ee/elonakearney').read().decode('utf-8')
links = re.findall(r'href=[\'\"]?([^\'\" >]+)', html)
print('\n'.join(list(set(links))))
