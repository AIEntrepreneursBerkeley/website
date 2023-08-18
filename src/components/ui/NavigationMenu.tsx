import { forwardRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '~/utils/cn';
import { ChevronDown } from 'lucide-react';

const NavigationMenuDemo = () => (
  <NavigationMenu.Root className="NavigationMenuRoot">
    <NavigationMenu.List className="NavigationMenuList">
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="NavigationMenuTrigger">
          Program <ChevronDown className="CaretDown" aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="NavigationMenuContent">
          <ul className="List one">
            <li style={{ gridRow: 'span 3' }}>
              <NavigationMenu.Link asChild>
                <a className="Callout" href="#program">
                  <div className="CalloutHeading">Program 2023</div>
                  <p className="CalloutText">
                    What we have planned for the next year.
                  </p>
                </a>
              </NavigationMenu.Link>
            </li>

            <ListItem href="" title="">
              Startups
            </ListItem>
            <ListItem href="" title="">
              Events
            </ListItem>
            <ListItem href="/apply" title="">
              Apply
            </ListItem>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="NavigationMenuTrigger">
          About <ChevronDown className="CaretDown" aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="NavigationMenuContent">
          <ul className="List two">
            <ListItem title="Team" href="/team">
              Team
            </ListItem>
            <ListItem title="FAQ" href="/faq">
              Frequently Asked Questions
            </ListItem>
            <ListItem title="Blog" href="/blog/open-ai-partnership">
              Blog
            </ListItem>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator className="NavigationMenuIndicator">
        <div className="Arrow" />
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div className="ViewportPosition">
      <NavigationMenu.Viewport className="NavigationMenuViewport" />
    </div>
  </NavigationMenu.Root>
);

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenu.Link asChild>
      <a ref={ref} className={cn('ListItemLink', className)} {...props}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
ListItem.displayName = 'ListItem';

export default NavigationMenuDemo;
