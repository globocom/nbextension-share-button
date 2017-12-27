from setuptools import setup, find_packages
setup(
  name = 'nbextension-share-button',
  version = '0.1.6',
  description = 'A Jupyter Notebook extension that adds a share button to the toolbar.',
  author = 'Globo.com',
  url = 'https://github.com/globocom/nbextension-share-button/',
  keywords = ['nbextension', 'share', 'notebook'],
  classifiers = [],
  packages = find_packages('.'),
  include_package_data = True
)
