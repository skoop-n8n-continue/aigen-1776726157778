from PIL import Image
import numpy as np

img = Image.open('assets/images/example_filled_product_tiers_1.jpg')
# Let's crop some regions to check colors
# GOLD header
gold_crop = img.crop((100, 200, 300, 300))
gold_crop.save('.tmp/gold_crop.jpg')

# Brand name
brand_crop = img.crop((100, 300, 300, 350))
brand_crop.save('.tmp/brand_crop.jpg')

# Price
price_crop = img.crop((500, 300, 600, 400))
price_crop.save('.tmp/price_crop.jpg')

