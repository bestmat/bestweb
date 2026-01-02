extern void print_num(int x);
extern void setStyleAttribute(const char *element, int elementSize, const char *attribute, int attributeSize, const char *value, int valueSize);
int add(int x, int y) {
    print_num(x + y);
    setStyleAttribute("h1", 2, "background", 10, "red", 3);
    // document.querySelector("h1").style.color = "red";
    return x + y;
}
