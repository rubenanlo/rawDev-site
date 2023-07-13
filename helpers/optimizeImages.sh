
# Note: when using this script, make sure you have the following packages
# installed:
# - imagemin
# - imagemin-webp
# - imagemin-pngquant
# - imagemin-mozjpeg
# - imagemin-svgo
# - imagemin-gifsicle

# script: "npm install imagemin imagemin-webp imagemin-pngquant imagemin-mozjpeg imagemin-svgo imagemin-gifsicle"

# This script will optimize all images in the specified directories

directories=(
  "../public/static/assets" 
)

for dir in "${directories[@]}"
do
  cd "$dir"

  npx imagemin "**/*.{jpg,JPG,jpeg,png,webp,svg,gif}" --plugin=mozjpeg --plugin=pngquant --plugin-svgo --plugin=webp --plugin=gifsicle --out-dir ./optimized
  
  # Now, for each optimized image, if it exists in the "optimized" folder, delete the original
  for file in ./optimized/*; do
    # Check if the optimized file exists
    if [ -f "$file" ]; then
      # Get the name of the file without extension
      filename=$(basename -- "$file")
      filename="${filename%.*}"
      
      # Check if an original file exists with the same name (without considering the extension)
      if ls ./"$filename".* 1> /dev/null 2>&1; then
        # Remove the original file. This assumes the original has the same name and relative location, but in the current directory
        rm ./"$filename".*
        
        # Move the optimized image to the original directory
        mv "$file" .
      fi
    fi
  done
  
  # Remove the now-empty 'optimized' directory
  rmdir ./optimized

  cd -
done