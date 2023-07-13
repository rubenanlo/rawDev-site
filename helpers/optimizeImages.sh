# Note: when using this script, make sure you have the following packages
# installed:
# - imagemin
# - imagemin-webp
# - imagemin-pngquant
# - imagemin-mozjpeg
# - imagemin-svgo
# - imagemin-gifsicle

# Script you need to run:
# npm i -D imagemin imagemin-cli imagemin-webp imagemin-pngquant imagemin-mozjpeg imagemin-svgo imagemin-gifsicle

# ***********************
# ****** IMPORTANT ******
# ***********************

# This script will optimize all images in the specified directories
# It takes two arguments, a comma-separated list of directories and images
# Read directories and images from optimize.config.json. When saving a single
# image in this repo, please make sure there are no spaces in the filename.

# ***********************
# ****** IMPORTANT ******
# ***********************

directories=($(node -pe 'JSON.parse(fs.readFileSync("../optimize.config.json").toString()).directories.join(" ")'))
images=($(node -pe 'JSON.parse(fs.readFileSync("../optimize.config.json").toString()).images.join(" ")'))

# Optimize files in directories
for dir in "${directories[@]}"
do
  cd "$dir"
  npx imagemin "**/*.{jpg,JPG,jpeg,png,webp,svg, gif}" --plugin=mozjpeg --plugin=gifsicle --plugin=pngquant --plugin=svgo --plugin=webp --out-dir ./optimized

  # Now, for each optimized image, if it exists in the "optimized" folder, delete the original
  for file in ./optimized/*; do
    if [ -f "$file" ]; then
      filename=$(basename -- "$file")
      filename="${filename%.*}"

      if ls ./"$filename".* 1> /dev/null 2>&1; then
        rm ./"$filename".*
        mv "$file" .
      fi
    fi
  done

  rmdir ./optimized

    # Convert AVIF files to WebP while preserving aspect ratio and reducing size
  for avif_file in ./*.avif; do
    if [ -f "$avif_file" ]; then
      filename=$(basename -- "$avif_file")
      filename="${filename%.*}"
      webp_file="$filename.webp"
      ffmpeg -i "$avif_file" -vf "scale=iw*0.5:ih*0.5" -q:v 80 "$webp_file"
      echo "Converted $avif_file to $webp_file"
      rm ./"$filename".avif
    fi
  done

  cd -
done

# Optimize Single files
for image in "${images[@]}"
do
  image_directory=$(dirname "$image")
  filename=$(basename -- "$image")

  cd "$image_directory"
  
  # Check if the image is in AVIF format
  if [[ $filename == *.avif ]]; then
    # Convert AVIF to WebP
    webp_filename="${filename%.avif}.webp"
    ffmpeg -i "$filename" -vf "scale=iw*0.5:ih*0.5" -q:v 80 "$webp_filename"
    echo "Converted $filename to $webp_filename"
    rm "$filename"
  else
    # Optimize other image formats
    npx imagemin "$filename" --plugin=mozjpeg --plugin=pngquant --plugin=svgo --plugin.webp.quality=95 --plugin=gifsicle --out-dir ./optimized

    for file in ./optimized/*; do
      if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        filename="${filename%.*}"

        if ls ./"$filename".* 1> /dev/null 2>&1; then
          rm ./"$filename".*
          mv "$file" .
        fi
      fi
    done

    rmdir ./optimized
  fi

  cd -
done
