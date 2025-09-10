import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'research-interests', label: 'Interests' },
    { id: 'academic-credentials', label: 'Education' },
    { id: 'research-experience', label: 'Research Experience' },
    { id: 'work-experience', label: 'Work Experience' },
    // { id: 'teaching-experience', label: 'Teaching Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'research-projects', label: 'Projects' },
    { id: 'technical-skills', label: 'Skills' },
    { id: 'coursework', label: 'Coursework' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'references', label: 'References' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">      <div className="container max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl text-primary cursor-pointer whitespace-nowrap flex-shrink-0" onClick={() => scrollToSection('hero')}>
            Md. Bipul Islam
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="w-full flex justify-between">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className="cursor-pointer px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent text-center whitespace-nowrap"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className="justify-start text-sm"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;