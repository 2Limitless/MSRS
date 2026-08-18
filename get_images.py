import urllib.request, re
html = urllib.request.urlopen('https://mindsetreset.co/programs').read().decode('utf-8')
links = set(re.findall(r'src=[\'\"]?(https://static\.wixstatic\.com/media/[^\'\" >]+)', html))
for l in links:
    print(l)
