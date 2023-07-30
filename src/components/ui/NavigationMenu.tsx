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
                <a className="Callout" href="/">
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    fill="white"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
                    <path d="M12 0H4V8H12V0Z" />
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                  </svg>
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
            <ListItem href="" title="">
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
            <ListItem title="People" href="">
              People
            </ListItem>
            <ListItem title="FAQ" href="">
              Frequently Asked Questions
            </ListItem>
            <ListItem title="Press Release" href="">
              Press Release
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
