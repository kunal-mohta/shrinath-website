count=1
for file in ./products/*
do
    mv -i "${file}" "./products/p${count}.jpeg"
    count=$((count + 1))
#    echo $count
done
